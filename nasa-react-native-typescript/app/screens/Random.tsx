import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
function Random({ route, navigation }:any) {
    const { id } = route.params;
    console.log(route.params);
    const [name, setName] = useState<String>('');
    const [size, setSize] = useState<any>();
    const [url, setUrl] = useState<String>('');
    const [hazard, setHazard] = useState<any>();useEffect(() => {
        async function getData() {
            const resultSet = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=5GvLkv989wwuv06Ix8G1hoGKQstfKP9pWvrLDd6B`);
            console.log(resultSet);
            const data = resultSet.data;
            setSize(data.estimated_diameter.meters.estimated_diameter_max);
            setName(data.name);
            setUrl(data.nasa_jpl_url);
            const hazardous = data.is_potentially_hazardous_asteroid.toString().charAt(0).toUpperCase()+data.is_potentially_hazardous_asteroid.toString().slice(1);
            setHazard(hazardous);
        }
        if (id)  
        getData();
    })

    return (
        <SafeAreaView style={styles.container}>
            <Text>About</Text>
                    <Text>ID: {id}</Text>
                    <Text>Size: {size}</Text>
                    <Text>Name: {name}</Text>
                    <Text>NASA JPL URL: {url}</Text>
                    <Text>Is Potentially Hazardous: {hazard}</Text>
                </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default Random;