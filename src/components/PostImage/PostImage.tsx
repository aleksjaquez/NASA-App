import React, { FC } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { PostImage as PostImageTypes, RootStackParams } from '../../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type PostImageNavigationProp = NativeStackNavigationProp<RootStackParams, 'Detail'>
const PostImage: FC<PostImageTypes> = ({title, date, url, explanation}) => {

    const {navigate} = useNavigation<PostImageNavigationProp>()

    const handleViewPress = () => {
        navigate('Detail', {title, date, url, explanation})
    }
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <View style={styles.leftContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={{uri: url}} style={styles.image}/>
                </View> 
            </View>
            
            <TouchableOpacity style={styles.button} onPress={handleViewPress}>
            <Text style={{color:"white", fontWeight: "bold"}}>View</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        backgroundColor: 'rgba(18,39,113,255)',
        borderRadius: 20,
        marginBottom: 12,
        padding: 16,
    },
    title :{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    date :{
        color: 'white',
    },
    rightContainer :{
        marginTop: 16,
        alignItems: 'flex-end',
        backgroundColor: 'white',
    },
    imageContainer :{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        width: '100%',
        height: 60,
        borderRadius: 10,
        
    },
    infoContainer :{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    
    },
    leftContainer :{
        flex: 2,
        marginRight: 8
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

export default PostImage