import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { getProducts } from './FridgeService';
import { FlatList } from 'react-native-web';

export default class Products extends Component {
    state = {
        products: []

    }

    async componentDidMount() {
        const { id } = this.props.route.params;
        var products = await getProducts(id);
        this.setState({ products: products });
    }

    render() {
        return (
            // TODO: create a card component about products and render it instead of TEXT
            <View>
                <FlatList data={this.state.products} renderItem={({ item }) => <Text>{item.productName}</Text>} />
            </View>
        )
    }
}