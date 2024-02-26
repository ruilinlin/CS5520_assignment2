import { StyleSheet, Text, View ,SafeAreaView,FlatList} from 'react-native'
import React, { useState, useEffect } from 'react';
import ActivitiesItem from '../components/ActivitiesItem.js';
import colors from '../components/Color';
import Header from '../components/Header';
import useActivityList from '../components/useActivityList.js';

export default function SpecialActivites({navigation}) {
//  const [activities, setActivities] = useState([]);
  const  activities  = useActivityList();

  const specialActivities = activities.filter(activity => 
    (activity.activity === "Running" || activity.activity === "Weights") &&  
    Number(activity.duration) > 60 && activity.important
  );
    
  
  return (
    <View style={styles.container}>
      <Header title={'Special Activities'} navigation={navigation} showAddButton={true}/>
      <FlatList style={styles.listContainer}
        data={specialActivities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ActivitiesItem activity={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
  },
  listContainer:{
    marginTop:30,
    marginBottom:30,
  }
})