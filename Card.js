import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { round } from 'react-native-reanimated';
import { formatDate, getCountdownParts } from './util';

export default function Card({ item }) {
    return (
        <View style={styles.eventCard}>
            <View style={styles.cardHeader}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.date}>{formatDate(item.date)}</Text>
            </View>

            <View style={styles.counterContainer}>
                <Text style={styles.description}>{item.model}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    eventCard: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 25,
        marginBottom: 25,
        padding: 30,
        backgroundColor: '#36413d',
        width: '100%',
    },
    cardHeader: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    title: {
        fontSize: 50,
        color: '#fff',
        textAlign: 'left',
        width: '70%',
        
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