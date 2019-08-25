import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput , Button} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import { connect } from 'react-redux';
import { LOGIN_REQUEST, LOGOUT } from '../actions/actionTypes'


class LoginScreen extends Component {
  render(){
    return (
      <View >
        <View >
          <Button title="Login" color="red" onPress={this.props.login} />
          <Button title="Sign Up" onPress={this.props.onCancel} />
        </View>
        <Text>token: {this.props.token || ''}</Text>
      </View>
    );
  
  }
  //const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');
  
  // state = {
  //   token: ''

  // }
   emailInputHandler = enteredText => {
    setEmail(enteredText);
  };

   passwordInputHandler = enteredText => {
    setPassword(enteredText);
  };

  componentWillReceiveProps(nextProps) {
  console.log('yee ')
  }

}

function mapStateToProps (state) {
  console.log("Hey", state);

  //Actions.welcome()
  return {
     token: state.loginReducer.status
  };
}
function mapDispatchToProps (dispatch){
  return {
    login: () => dispatch({type:LOGIN_REQUEST, user:'NoriSte', password:'password'})
  };
}

// const mapStateToProps = state => {
//   return {
//     places: state.places.places
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     add: (name) => {
//       dispatch(addPlace(name))
//     }
//   }
// }

const styles  = StyleSheet.create({
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 0.5,
    padding: 10,
    marginBottom: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);



