import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Logo(props)  {
    return (
        <TouchableOpacity onPress={() => alert('Img')}>
            <Image style={styles.image} source={props.source} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        marginBottom: 20,
        marginTop: 50,
    },
});
