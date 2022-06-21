import { Text, View, StyleSheet, FlatList } from 'react-native'
import React, { Component } from 'react'
import { getProducts } from './FridgeService';
import { Button } from 'react-native-web';
import ProductCard from './ProductCard';

export default class Products extends Component {
    state = {
        products: []

    }

    async componentDidMount() {
        const { id } = this.props.route.params;
        var products = await getProducts(id);
        console.log(products);
        this.setState({ products });
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.products}
                    renderItem={({ item }) => <ProductCard item={item} />}
                />
                <Button title="Add product" onPress={() => {
                    const { id } = this.props.route.params;
                    this.props.navigation.navigate("Add Product", { id: id });
                }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({

});