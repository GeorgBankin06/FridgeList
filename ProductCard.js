import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ProductCard({ item }) {
    return (
        <View style={styles.container}>
            <Text>{item.productName}</Text>
            <Text>{item.expiryDate}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
    }
});