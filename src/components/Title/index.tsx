import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Title = ({text}) => {
    return (
        <View>
            <Text style={style.title}> {text}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    title: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
});

export default Title;
