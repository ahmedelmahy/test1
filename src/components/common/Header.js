import React from 'react';
import {Text, View} from 'react-native';


// make a component
const Header = (props) => {
    const { textStyle, viewStyle} = styles;

    return (
        <View style = {viewStyle}>
            <Text style= {textStyle}>{props.headerText}</Text>
        </View>
    );
};


const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        backgroundColor: 'rgba(100, 52, 100, 0.2)'

    },
    textStyle: {
        fontSize: 20
    }
};

// make the component available to other parts of the app
export { Header };