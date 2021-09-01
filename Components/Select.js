import React, {useState} from "react";
import {View, Text, Picker, StyleSheet, Button} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Select = ({navigation}) => {

    const [value, setVal] = useState("Select");

    return(

        <View style={styles.container}> 

        <Text>Select a Number</Text>

            <Picker
            selectedValue = {value}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => setVal(itemValue)}
            >

            <Picker.Item label="Select" value="Select" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />

            </Picker>
            {value === "Select" ? <Text></Text> : <Button
        title="Start Game"
        onPress={() => navigation.navigate('card')}
      />}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center"
    }
  });

export default Select;