import React from 'react';
import {View, Text, Button} from "react-native";
import {Actions} from "react-native-router-flux";

import {useDispatch, useSelector} from 'react-redux';
import {changeCount} from "../../store/actions";

const LoginPage = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  console.log(state);

  return (
    <View>
      <Text>This is the Login Page</Text>
      <Button title="Home" onPress={() => Actions.home()}/>
      <Text>{state.mock_reducer.count}</Text>
      <Button title={"Add 4"} onClick={() => {
        console.log("Pressed");
        dispatch(changeCount(4));
      }}/>
    </View>
  )
}

export default LoginPage;
