//import liraries
import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    ListView,
    PixelRatio,
    StyleSheet,
    Text,
    Alert,
    View,
    TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { getUserList } from 'reducers/UserListReducer';

import ParallaxScrollView from 'react-native-parallax-scroll-view';

// create a component
class UserListScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }).cloneWithRows([
                'Simplicity Matters',
                'Hammock Driven Development',
                'Value of Values',
                'Are We There Yet?',
                'The Language of the System',
                'Design, Composition, and Performance',
                'Clojure core.async',
                'The Functional Database',
                'Deconstructing the Database',
                'Hammock Driven Development',
                'Value of Values'
            ])
        };
    }

    pressRow(rowID) {
        // Alert.alert('item pressed');
        Actions.UserProfileScene();
    }

    renderRow(rowData) {
        return (

            <TouchableHighlight onPress={() => {
                this.pressRow();
                {/*highlightRow(sectionID, rowID);*/ }
            }}>
                <View key={rowData} style={styles.row}>
                    <Text style={styles.rowText}>
                        {rowData}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }

    renderParallaxScrollView() {
        const { onScroll = () => { } } = this.props;

        return (
            <ParallaxScrollView
                onScroll={onScroll}
                headerBackgroundColor="#333"
                stickyHeaderHeight={STICKY_HEADER_HEIGHT}
                parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
                backgroundSpeed={10}
                renderBackground={() => (
                    <View key="background">
                        <Image
                            style={{
                                width: null,
                                height: 200
                            }}
                            source={require('assets/images/header.png')} />
                        <View style={{
                            position: 'absolute',
                            top: 0,
                            width: window.width,
                            backgroundColor: 'rgba(0,0,0,.4)',
                            height: PARALLAX_HEADER_HEIGHT
                        }} />
                    </View>
                )}

                renderForeground={() => (
                    <View key="parallax-header" style={styles.parallaxHeader}>
                        <Text style={styles.sectionSpeakerText}>{this.props.user.full_name}</Text>
                    </View>
                )}

                renderStickyHeader={() => (
                    <View key="sticky-header" style={styles.stickySection}>
                        <Text style={styles.stickySectionText}>FullName</Text>
                    </View>
                )}

            />
        );
    }

    componentWillUpdate(nextProps, nextState) {
        // perform any preparations for an upcoming update
        // this.props.getUserList(this.state.user.token);
    }

    render() {
        return (
            <ListView
                ref="ListView"
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this.renderRow(rowData)}
                renderScrollComponent={props => this.renderParallaxScrollView()}
            />
        );
    }
}

const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 200;
const STICKY_HEADER_HEIGHT = 44;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: window.width,
        height: PARALLAX_HEADER_HEIGHT
    },
    stickySection: {
        height: STICKY_HEADER_HEIGHT,
        width: 300,
        justifyContent: 'flex-end'
    },
    stickySectionText: {
        color: 'white',
        fontSize: 20,
        margin: 10
    },
    fixedSection: {
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    fixedSectionText: {
        color: '#999',
        fontSize: 20
    },
    parallaxHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'column',
        paddingTop: 0
    },

    sectionSpeakerText: {
        color: 'white',
        fontSize: 24,
        paddingVertical: 5
    },
    sectionTitleText: {
        color: 'white',
        fontSize: 18,
        paddingVertical: 5
    },
    row: {
        overflow: 'hidden',
        paddingHorizontal: 10,
        height: ROW_HEIGHT,
        backgroundColor: 'white',
        borderColor: '#ccc',
        borderBottomWidth: 1,
        justifyContent: 'center'
    },
    rowText: {
        fontSize: 20
    }
});

// Map Redux state to component props
function mapStateToProps(state) {
    console.log(state.userSessionReducer.user);
    return {
        error: state.getUserListReducer.error,
        loading: state.getUserListReducer.loading,
        userList: state.getUserListReducer.userList,
        user: state.userSessionReducer.user
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        getUserList: (headers) => dispatch(getUserList(headers))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserListScreen);