import React, {Component} from 'react';
import {View, Text, TextInput, Stylesheet, Image, Button} from 'react-native';


export default class LoginPage extends Component {

    render() {

        return(
            <View>
                
            <Text>This is the login page</Text>
            

            <TextInput
            placeholder="Username"

            
            />
            <TextInput
            placeholder="Password"
            />



            <Button
            
            title="Login"
            />
        </View>

        )


    }

}







        

