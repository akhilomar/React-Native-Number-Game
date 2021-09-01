import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import GestureFlipView from 'react-native-gesture-flip-card';

const Cards = (props) => {

    const [flipType, setFlip] = useState('left');

    useEffect(() => {

    })


    const renderFront = () => {
        return(
            <TouchableOpacity onPress = {() => {
                this.flipView.flipRight() 
                setFlip('right');
                console.log("Pressed" + `${props.val}`)
        
        }} >
            <View style = {{backgroundColor:'red', width: 100, height: 100, alignItems: 'center', justifyContent: 'center'}}>
                <Text style = {{color: "white", fontSize: 20}}>Swipe Me</Text>
                

            </View>
            </TouchableOpacity>
        );
    };

    const renderBack = () => {
        return(
        <View style = {{backgroundColor:'blue', width: 100, height: 100, alignItems: 'center', justifyContent: 'center'}}>
            <Text style = {{color: "white", fontSize: 30}}>{props.val}</Text>
            {/* <TouchableOpacity onPress = {() => {
                (flipType === 'left') ? this.flipView.flipRight() : this.flipView.flipLeft();
                setFlip((flipType === 'left') ? 'right' : 'left');
        
        }}  style = {{padding: 10, backgroundColor: 'purple', width: 100, height: 40, alignItems: 'center', justifyContent: 'center'}}>
                <Text style = {{color: 'white'}}>Reverse</Text>
            </TouchableOpacity> */}

        </View>
        );
    };
    //ref = {(ref) => this.flipView = ref}

    return(
        <SafeAreaView style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <GestureFlipView ref = {(ref) => this.flipView = ref}  width={300} height = {500}>
                {renderFront()}
                {renderBack()}
            </GestureFlipView>
        </SafeAreaView>
    );
}

export default Cards;