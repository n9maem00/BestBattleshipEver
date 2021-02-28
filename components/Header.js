import React, {Component} from 'react'
import { View, Text } from 'react-native'
import styles from '../style/style'

export default function Header () {
    return (
            <View style={styles.header}> 
                <Text style={styles.title}>
                    BATTLESHIP
                </Text>
            </View>
    )
   } 

