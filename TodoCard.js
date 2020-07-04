import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#282A2E',
        flex: 1,
        paddingTop: 24,
        paddingBottom: 26,
        paddingLeft:20,
        paddingRight:20,
        marginBottom: 16,
        borderRadius:8

    },
    cardContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 14,
        fontWeight: '300',
        marginLeft: 7,
        color:'#fff',
        textAlign: 'left',
    },
    time: {
        fontWeight: '200',
        fontSize: 12,
        color: '#9AA5B1',
        textAlign: 'right',
        textTransform:'uppercase'
    },
});

export default function TodoCard({ todo }) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <Text style={styles.title}>{todo.title}</Text>
                <Text style={styles.time}>{todo.time}</Text>
            </View>
        </View>
    );
}

TodoCard.propTypes = {
    todo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired
    }),
};
