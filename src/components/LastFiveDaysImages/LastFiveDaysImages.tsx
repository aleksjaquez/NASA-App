import React, {FC} from 'react'
import { Text, View, StyleSheet, ScrollView} from 'react-native'
import { PostImage as PostImageTypes  } from '../../types'
import PostImage from '../PostImage'

const LastFiveDaysImages: FC<{postImages?: PostImageTypes[]}> = ({postImages}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Last Five Days</Text>
            <ScrollView style={styles.content}>
                {postImages?.map((postImage) => {
                    return (
                        <PostImage key={`postImage-${postImage.title}`} {...postImage}/>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
        marginVertical: 8,
    },
    content :{
        
    },
    title :{
        color: 'white',
        fontSize: 20,
        marginBottom: 16
    }
})
export default LastFiveDaysImages