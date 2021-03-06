import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import { useDispatch, useSelector } from 'react-redux'; 

import Card from '../components/Card';
import * as houseAction from '../redux/actions/houseAction';

export default function HomeListScreen(props) {
  const dispatch = useDispatch();
  const { houses } = useSelector(state => state.house);

  useEffect(() => {
    dispatch(houseAction.fetchHouses());
  }, [dispatch]);
  
  return (
    <View style={styles.container}>
      <FlatList
        data={houses}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <Card
            navigation={props.navigation}
            id={item._id}
            title={item.title}
            address={item.address}
            homeType={item.homeType}
            description={item.description}
            price={item.price}
            image={item.image}
            yearBuilt={item.yearBuilt}
          />
        )}
      />
      <FloatingAction
        position="right"
        animated={false}
        showBackground={false}
        onPressMain={() => props.navigation.navigate('AddHome')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});