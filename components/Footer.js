import React, {Component} from 'react'
import { View, Text } from 'react-native'
import styles from '../style/style'

export default function Footer (){
   
    return (
            <View style={styles.footer}> 
                <Text style={styles.author}>
                    Author: Emma Määttälä
                </Text>
            </View>
    )
   } 

