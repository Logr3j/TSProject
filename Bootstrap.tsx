import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/navigation';
import {AuthProvider} from './src/hooks/useAuth';

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
