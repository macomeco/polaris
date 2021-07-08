import jaTranslations from '@shopify/polaris/locales/ja.json'
import { AppProvider } from '@shopify/polaris';
import React from 'react';

import './App.css';
import Navi from './components/Navi';

function App() {
  return (
    <AppProvider i18n={jaTranslations}>
      <Navi />
    </AppProvider>
  );
}

export default App;
