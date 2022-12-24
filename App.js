import React from 'react';
import AppNav from './AppNav';
import {AuthProvider} from './src/context/AuthContext';
import {DataProvider} from './src/context/DataContext';

const App = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <AppNav />
      </DataProvider>
    </AuthProvider>
  );
};

export default App;
