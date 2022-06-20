import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { formatDate, getCountdownParts } from './util';

export default function Card({ item, navigation }) {
    return (
        <View style={styles.eventCard}>
            <View style={styles.cardHeader}>
                <Text style={styles.title}>{item.name}</Text>
            </View>
            <View style={styles.counterContainer}>
                <Text style={styles.description}>{item.model}</Text>
                    <View style={styles.button}>
                        <Button title='Products' onPress={() => {
                        console.log(item.id);
                        navigation.navigate("Product List", { id: item._id });
                        }} />
                    <View/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    eventCard: {
        borderWidth: 4,
        borderColor: '#4c657e',
        borderRadius: 25,
        marginBottom: 25,
        padding: 30,
        backgroundColor: '#36413d',
        width: '450px',
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
        width: '100%',

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
    counterContainer:{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection:'row'
    },
    button:{
        
    }
});