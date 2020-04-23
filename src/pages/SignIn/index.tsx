import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

import { useAuth } from '../../context/auth';

const style = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
});

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  function handleSignIn() {
    signIn();
  }

  return (
    <View style={style.container}>
      <Button title="Sign In" onPress={() => handleSignIn()} />
    </View>
  );
};

export default SignIn;
