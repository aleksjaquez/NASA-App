import React, { useEffect, useState } from 'react';
import { View, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import fetchApi from '../../utils/fetch';
import TodaysImage from '../../components/TodaysImage';
import LastFiveDaysImages from '../../components/LastFiveDaysImages';
import { PostImage } from '../../types';
import {format, sub} from 'date-fns'


function Home (){
    const [todaysImage, setTodaysImage] = useState<PostImage>({});
    const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);
    
    useEffect(() => {
        const loadTodaysImage = async () => {
            try {
                const todaysImageResponse = await fetchApi()
                setTodaysImage(todaysImageResponse)
            } catch (error) {
               setTodaysImage({})
            }
        }

        const loadLast5DaysImages = async () => {
            try {
                const date = new Date();
                const todaysDate = format(date, 'yyyy-MM-dd')
                const fiveDaysAgo = format(sub(date, {days: 10}), 'yyyy-MM-dd')

                const lastFiveDaysImagesResponse = await fetchApi(`&start_date=${fiveDaysAgo}&end_date=${todaysDate}`)

                setLastFiveDaysImages(lastFiveDaysImagesResponse)

            } catch (error) {
                setLastFiveDaysImages([])
            }
        }

        loadTodaysImage().catch(null)
        loadLast5DaysImages().catch(null)
    }, [])

    return (
        <View style={styles.container}>
            <Header/>
            <TodaysImage {...todaysImage}/>
            <LastFiveDaysImages postImages={lastFiveDaysImages}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(7,26,93,255)',
    }
})

export default Home;