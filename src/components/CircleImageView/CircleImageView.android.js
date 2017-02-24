import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

export default class CircleImageView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.icon}
                    source={this.props.imageLink} />
            </View>
        )
    }
}

const IMAGE_SIZE = 90;
const IMAGE_ICON_SIZE = IMAGE_SIZE / 2;

const styles = StyleSheet.create({
    container: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        borderRadius: IMAGE_ICON_SIZE,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },

    icon: {
        width: IMAGE_ICON_SIZE,
        height: IMAGE_ICON_SIZE
    }
});