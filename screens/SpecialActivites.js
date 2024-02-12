import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react';
import ActivitiesList from '../components/ActivitiesList';
import colors from '../components/Color';
import Header from '../components/Header';

export default function SpecialActivites({navigation, route }) {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    if (route.params?.activities) {
      const specialActivities = route.params.activities.filter(activity => 
        activity.duration > 60
      );
  
      setActivities(specialActivities);
    }
  }, [route.params?.activities]); // Dependency array to re-run effect if activities change
  

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Special Activities'}/>
      <FlatList
        data={activities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ActivitiesList activity={item} />
        )}
        style={{ marginTop: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
  },
})