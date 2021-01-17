import React from 'react';
import {View, Text, Button, Alert} from "react-native";

import {Router, Stack, Scene, Actions} from 'react-native-router-flux';

import styles from './styles/styles';
import LoginPage from "./components/auth";

const CafeteriaPage = () => {
  return (
    <View>
      <Text>Cafeteria Page</Text>
    </View>
  )
}

const HomePage = () => {
  return (
    <View>
      <Text>Home page</Text>
      <Button
        title="Press me"
        onPress={() => Actions.register()}
      />
    </View>
  )
}

const Routes = (props) => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="login" component={LoginPage} title="Login" initial/>
        <Scene key="home" component={HomePage} />
        <Scene key="register" component={CafeteriaPage} title="Register" />
      </Stack>
    </Router>
  )
}

export default Routes;
