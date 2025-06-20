import React from 'react';

import Toast from 'react-native-toast-message';
import MainNaviagation from './src/navigation';
import ReduxProvider from './src/providers/ReduxProvider';
import { toastConfig } from './toast-config';

type Props = {};

const App = (props: Props) => {
  return (
    <ReduxProvider>
      <MainNaviagation />
      <Toast config={toastConfig} />
    </ReduxProvider>
  );
};

export default App;
