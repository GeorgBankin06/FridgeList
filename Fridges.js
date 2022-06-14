import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import Card from "./Card";
import moment from "moment";
import { getAllFridges } from "./FridgeService";

export default class EventList extends Component {
    state = {
        fridges: [],
    };

    async componentDidMount() {
        var fridges = await getAllFridges();
        this.setState({ fridges });
        console.log(fridges);
    }

    render() {
        return (
            <View
                style={styles.listView}>
                <FlatList
                    data={this.state.fridges}
                    renderItem={({ item }) => <Card item={item} />}
                />
                <Button
                    onPress={() => this.props.navigation.navigate("Fridge List")}
                    title="Add fridge"
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    eventList: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    listView: {
        paddingBottom: 40
    }
});
