import React from 'react';
import {SafeAreaView, View, FlatList, Dimensions, StyleSheet } from 'react-native';
import Cards from './Cards';

const CardScreen = () => {

    // const data = ['1','2','3','4','5','6','7','8','9'];

    const DATA = [
      {
        id: '1',
        title: '1',
      },
      {
        id: '2',
        title: '2',
      },
      {
        id: '3',
        title: '3',
      },
      {
        id: '4',
        title: '4',
      },
      {
        id: '5',
        title: '5',
      },
      {
        id: '6',
        title: '6',
      },
      {
        id: '7',
        title: '7',
      },
      {
        id: '8',
        title: '8',
      },
      {
        id: '9',
        title: '9',
      }
      
    ];

      const Shuffle = (arr1) => {
        var ctr = arr1.length, temp, index;
        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = arr1[ctr];
            arr1[ctr] = arr1[index];
            arr1[index] = temp;
        }
        return arr1;
      }

      const numColumns = 3;
      const size = Dimensions.get('window').width/numColumns;
      const styles = StyleSheet.create({
        itemContainer: {
          width: size,
          height: size,
        },
        item: {
          flex: 1,
          margin: 3,
          backgroundColor: 'lightblue',
        }
      });
    
    return(
      <>
        <FlatList
            data={DATA}
            renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                    <Cards val = {item.value}/>
                </View>
            )}
            keyExtractor={item => item.id}
            numColumns={numColumns} />

          {/* {
            data.map((index, item) => {
              return(
              
              <View style={styles.itemContainer}>
                    <Cards val = {item}/>
              </View>
              );
            })
          } */}
      </>
    );
}

export default CardScreen;