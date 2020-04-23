import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

import { useAuth } from '../../context/auth';

const style = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

const Dahsboard: React.FC = () => {
  const { user, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={style.container}>
      <Text>{user?.name}</Text>
      <Button title="Sign Out" onPress={() => handleSignOut()} />
    </View>
  );
};

export default Dahsboard;
