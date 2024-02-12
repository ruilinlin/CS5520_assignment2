import { StyleSheet, Text, View, FlatList,Button,SafeAreaView } from 'react-native'
import Header from '../components/Header';
import ActivitiesList from '../components/ActivitiesList';
import { useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import colors from '../components/Color';

export default function AllActivities({navigation, route }) {
  const [activities, setActivities] = useState([]);
  //const route = useRoute();

  useEffect(() => {
    console.log(route.params); 
    if (route.params?.newActivity) {
      setActivities((currentActivities) => [...currentActivities, route.params.newActivity]);
    }
  }, [route.params?.newActivity]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button 
          title="Add" 
          color={colors.yellowButton} 
          onPress={() => navigation.navigate('AddAnActivity')} 
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Header title={'All Activities'}/>
      <FlatList
        data={activities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ActivitiesList activity={item} />
        )}
 style={{ marginTop: 60 }} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.background,
    justifyContent: "center",
  },
})