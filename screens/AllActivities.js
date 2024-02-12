import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import ActivitiesList from '../components/ActivitiesList';
import { useRoute } from '@react-navigation/native';

export default function AllActivities({navigation, route }) {
  const [activities, setActivities] = useState([]);
  const route = useRoute();

  useEffect(() => {
    if (route.params?.newActivity) {
      setActivities((currentActivities) => [...currentActivities, route.params.newActivity]);
    }
  }, [route.params?.newActivity]);


  return (
    <View>
      <Header title={'All Activities'}/>
      <FlatList
        data={activities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <GoalItem goalObj={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({})