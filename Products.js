import { Text, View, StyleSheet, TextInput, Button} from 'react-native'
import React, { Component } from 'react'
import { getProducts } from './FridgeService';

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
            <View> 
                <Text style={styles.formTitle}>Add Product</Text>
                <TextInput
                    style={styles.inputBox}
                    placeholder='Product Name'
                    value={this.state.title}
                    onChangeText={this.handleChangeTitle}
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder='Expiry Date'
                    value={this.state.description}
                    onChangeText={this.handleChangeDescription}
                />
                { <Button
                    title='Add'
                    style={styles.addButton}
                    onPress={() => {
                        console.log(
                            'Product information: ' +
                            this.state.title +
                            ', ' +
                            this.state.description
                        );
                        this.props.navigation.goBack();
                    }}
                    /> }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formBox: {
        padding: 30,
    },
    formTitle: {
        fontSize: 30,
        marginLeft: 15,
        marginTop: 20,
        marginBottom: 5,
    },
    inputBox: {
        backgroundColor: 'white',
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        width: '100%',
    },
    addButton: {
        marginBottom: 30
    }
});