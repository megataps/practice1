//import liraries
import React, { Component } from 'react';
import {
    Platform,
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
            }).cloneWithRows([])
        };
    }

    pressRow(rowData) {
        Actions.UserProfileScene({ userData: rowData });
    }

    renderRow(rowData) {
        return (

            <TouchableHighlight onPress={() => {
                this.pressRow(rowData);
                {/*highlightRow(sectionID, rowID);*/ }
            }}>
                <View key={rowData} style={styles.row}>
                    <Text style={styles.rowText}>
                        {rowData.full_name}
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
                headerBackgroundColor="#00000000"
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

                            {/*<Image
                                style={{ width: 30, height: 24, marginTop: 27, marginLeft: 10 }}
                                source={require('assets/images/menu.png')} />
                        </View>*/}

                    </View>
                )}

                renderForeground={() => (
                    <View key="parallax-header" style={styles.parallaxHeader}>
                        <Text style={styles.sectionSpeakerText}>{this.props.user.full_name}</Text>
                    </View>
                )}

                renderStickyHeader={() => (
                    <View key="sticky-header" style={styles.stickySection}>
                        <Text style={styles.stickySectionText}></Text>
                    </View>
                )}

            />
        );
    }

    componentDidMount(nextProps, nextState) {
        // perform any preparations for an upcoming update
        this.props.getUserList(this.props.user.token);
    }

    _getListViewData(userList) {
        let data = {};
        let sectionIds = [];

        userList.map((user) => {
            let section = userList.full_name;
            if (sectionIds.indexOf(section) === -1) {
                sectionIds.push(section);
                data[section] = [];
            }
            data[section].push(user);
        });

        return { data, sectionIds };
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.userList !== this.props.userList) {
            let data = nextProps.userList
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(data)
            })
        }
    }

    render() {

        return (
            <ListView
                ref="ListView"
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this.renderRow(rowData)}
                enableEmptySections={true}
                renderScrollComponent={props => this.renderParallaxScrollView()}
            />
        );
    }
}

const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 200;
const STICKY_HEADER_HEIGHT = Platform.OS === 'ios' ? 44 : 54;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',

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
        justifyContent: 'flex-end',
        backgroundColor: '#3C3B3C'
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