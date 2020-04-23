import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import { useAuth } from '../context/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const style = StyleSheet.create({
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <View style={style.loader}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
