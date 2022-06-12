import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {formatDate, getCountdownParts} from './util';

export default function EventCard({ eventItem }) {
    const countdown = getCountdownParts(eventItem.date);

    return (
        <View style={styles.eventCard}>
            <View style={styles.cardHeader}> 
                <Text style={styles.title}>{eventItem.title}</Text>
                <Text style={styles.date}>{formatDate(eventItem.date)}</Text>
            </View>
            
            <View style={styles.counterContainer}>
                <Text style={styles.description}>{eventItem.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    eventCard: {
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 16,
        padding: 16,
        backgroundColor: '#04b032',
        width: '100%'
    },
    cardHeader: {
        flex: 1,
        flexDirection: 'row'
    },
    title: {
        fontSize: 48,
        color: '#fff',
        textAlign: 'left',
        width: '70%'
    },
    description: {
        fontSize: 24,
        marginTop: 16,
        color: '#fff'
    },
    date: {
        fontWeight: 200,
        fontSize: 35,
        color: '#ffffff',
        width: '30%',
        textAlign: 'right'
    },
    
});