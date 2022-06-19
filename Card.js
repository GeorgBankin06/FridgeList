import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { formatDate, getCountdownParts } from './util';

export default function Card({ item, navigation }) {
    return (
        <View style={styles.eventCard}>
            <View style={styles.cardHeader}>
                <Text style={styles.title}>{item.name}</Text>
                <View>
                    <Button title='Products' onPress={() => {
                        console.log(item.id);
                        navigation.navigate("Product List", { id: item._id });
                    }} />
                </View>
            </View>

            <View style={styles.counterContainer}>
                <Text style={styles.description}>{item.model}</Text>
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