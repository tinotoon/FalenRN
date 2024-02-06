import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = () => {
    return <TextInput placeholder="Berikan Komentar Anda" style={style.input} />;
};

const style = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10,
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Input;
