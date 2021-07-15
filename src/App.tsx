import translations from '@shopify/polaris/locales/ja.json'
import { AppProvider } from '@shopify/polaris';
import React from 'react';

import './App.css';
import Navi from './components/Navi';

function App() {
  return (
    <AppProvider
        i18n={{translations}}
        theme={{
            colorScheme: 'light', //初期設定はlight　設定で変更可能
        }}
        >
      <Navi />
    </AppProvider>
  );
}

export default App;
