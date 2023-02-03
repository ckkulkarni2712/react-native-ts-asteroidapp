import React, {useState} from 'react';
import { TextInput,  ScrollView, Text, Pressable, NativeSyntheticEvent, TextInputChangeEventData, StyleSheet } from 'react-native';
import {  useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
function Base() {
    const idList = [2000719, 2000887, 2001036, 2001221, 2001566, 2001580,2001915,2001916,2001917,2001943,2001980, 2001620, 2001627, 2001685, 2001862, 2001863, 2001864, 2001865, 2001866];
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const [id, setID] = useState<any>();
    function searchData({
        nativeEvent: {text},
    }: NativeSyntheticEvent<TextInputChangeEventData>) {
       setID(text);
    }
    const randomid = idList[Math.floor(Math.random() * idList.length)]
    
    return (
        
        <ScrollView>
            <TextInput style={styles.textstlyling} placeholder="Enter Asteroid ID" onChange={searchData} />
            <Pressable onPress={() => { navigation.navigate('Asteroid', { id: id }); }} style={styles.button1}>
                <Text style={{
                    color: 'white',
                    fontSize: 25
                }}>Submit</Text>
            </Pressable>
            <Pressable onPress={() => { navigation.navigate('Random', { id: randomid }); }} style={styles.button2}>
            <Text style={{
                    color: 'white',
                    fontSize: 25
                }}>Random</Text> 
            </Pressable>
        </ScrollView>
     
    );
}
const styles = StyleSheet.create({
    button1: {
        flex: 1,
        backgroundColor: 'purple',
        marginTop: 25,
        alignItems: 'center',
        width: 200,
        marginLeft: 80
    },
    button2: {
        flex: 1,
        backgroundColor: 'purple',
        marginTop: 20,
        width: 200,
        alignItems: 'center',
        marginLeft: 80
        
    },
    textstlyling: {
        flex: 1,
        height: 60,
        width: 300,
        marginLeft: 30,
        padding: 10,
        marginTop: 200,
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center'
    }
})


export default Base;
