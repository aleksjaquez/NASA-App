import React, { FC } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import { PostImage, RootStackParams } from '../../types'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'


type PostImageNavigationProp = NativeStackNavigationProp<RootStackParams, 'Detail'>

const TodaysImage: FC<PostImage> = ({date,title,url,explanation}) => {
    const {navigate} = useNavigation<PostImageNavigationProp>()
    const handleViewPress = () => {
        navigate('Detail', {title, date, url, explanation})
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{uri: url}} style={styles.image}/>
            </View> 
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <TouchableOpacity style={styles.button} onPress={handleViewPress}>
            <Text style={{color:"white", fontWeight: "bold"}}>View</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        backgroundColor: '#2c449d',
        marginVertical: 16,
        borderRadius: 32,
        padding: 16
    },
    imageContainer:{
        
    },
    image:{
        width: '100%',
        height: 190,
        borderRadius: 32,
        borderWidth:2,
        borderColor: 'white'
    },
    rightContainer:{
        alignItems: 'flex-end',
    },
    title :{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    date :{
        color: 'white',
    },
    button: {
        alignSelf: "flex-end",
        alignItems: "center",
        backgroundColor: "rgba(7,26,93,255)",
        padding: 15,
        marginTop: 15,
        borderRadius:15,
        width: '50%',
      }

})
export default TodaysImage