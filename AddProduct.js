import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import React, { Component } from 'react'
import { createProduct } from './FridgeService';

export default class AddProduct extends Component {
    state = {
        id: "",
        name: "",
        expiryDate: "",
    }

    componentDidMount() {
        const { id } = this.props.route.params;
        this.setState({
            id
        });
        console.log(this.state.id);
        console.log(id);
    }

    render() {
        return (
            <View>
                <TextInput
                    style={styles.inputBox}
                    placeholder='Name'
                    value={this.state.name}
                    onChangeText={(value) => this.setState({
                        name: value
                    })}
                />

                <TextInput
                    style={styles.inputBox}
                    placeholder='Expiry Date'
                    value={this.state.expiryDate}
                    onChangeText={(value) => this.setState({
                        expiryDate: value
                    })}
                />

                <Button
                    title='Add'
                    style={styles.addButton}
                    onPress={async () => {
                        console.log(
                            'Product information: ' +
                            this.state.title +
                            ', ' +
                            this.state.description
                        );
                        console.log(this.state.id);
                        await createProduct(this.state.name, this.state.expiryDate, this.state.id);
                    }}
                />
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
        marginBottom: 10,
    },
    inputBox: {
        backgroundColor: 'white',
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    addButton: {
        marginBottom: 30
    }
});