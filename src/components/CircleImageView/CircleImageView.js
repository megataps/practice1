import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import Colors from 'config/colors';

export default class CircleImageView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.icon}
                    source={this.props.iconUrI} />
            </View>
        )
    }
}

CircleImageView.propTypes = {
  iconUrI: PropTypes.number.isRequired
};

const IMAGE_SIZE = 90;
const IMAGE_ICON_SIZE = IMAGE_SIZE / 2;

const styles = StyleSheet.create({
    container: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        borderRadius: IMAGE_ICON_SIZE,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },

    icon: {
        width: IMAGE_ICON_SIZE,
        height: IMAGE_ICON_SIZE
    }
});