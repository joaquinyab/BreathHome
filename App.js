import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Amplify, { Auth } from 'aws-amplify';
import {AmplifyTheme, withAuthenticator} from 'aws-amplify-react-native'
import config from './src/aws-exports';

Amplify.configure(config);


const App = () => {

  //Auth.signOut();
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const signUpConfig = {
    header: 'My Customized Sign Up',
    hideAllDefaults: true,
    signUpFields: [
      {
        label: 'Full name',
        key: 'name',
        required: false,
        displayOrder: 1,
        type: 'string'
      },
      {
        label: 'Email',
        key: 'email',
        required: true,
        displayOrder: 2,
        type: 'string'
      },
      {
        label: 'Username',
        key: 'username',
        required: true,
        displayOrder: 3,
        type: 'string'
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 4,
        type: 'password'
      },
    ]
  };



const customTheme = {


  ...AmplifyTheme,


  sectionFooterLink:{
    ...AmplifyTheme.sectionFooterLink,
    color:'#00ced1'
  },

  sectionHeaderText:{
    ...AmplifyTheme.sectionHeaderText,
    color:'#00ced1'


  },
  buttonDisabled: {
		backgroundColor: '#b0c4de',
		alignItems: 'center',
		padding: 16,
	},

  button: {
    ...AmplifyTheme.button,
  backgroundColor: '#00ced1'
  },

  input: {
      ...AmplifyTheme.input,
		padding: 16,
		borderWidth: 1,
		borderRadius: 50,
    borderWidth:1,
		borderColor: '#00ced1',
		color: '#00ced1',
	},
};


export default withAuthenticator(App, { signUpConfig, theme: customTheme })