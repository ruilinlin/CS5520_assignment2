import { StyleSheet, Text, View ,SafeAreaView,FlatList} from 'react-native'
import React, { useState, useEffect } from 'react';
import ActivitiesList from '../components/ActivitiesList';
import colors from '../components/Color';
import Header from '../components/Header';
import BottomTab from '../components/BottomTab';

export default function SpecialActivites({navigation, route }) {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    if (route.params?.activities) {
      const specialActivities = route.params.activities.filter(activity => 
        Number(activity.duration) >= 60
      );
  
      console.log(specialActivities); // Log to debug
      setActivities(specialActivities);
    }
  }, [route.params?.activities]);
  
  

  return (
    <View style={styles.container}>
      <Header title={'Special Activities'} navigation={navigation} showAddButton={true}/>
      <FlatList
        data={activities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ActivitiesList activity={item} />
        )}
      />
      <BottomTab navigation={navigation} activePage="SpecialActivities" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
  },
})