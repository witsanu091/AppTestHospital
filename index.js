/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import App from './App';
import {name as appName} from './app.json';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/stores/i18n';

export default function Main() {
  return (
    <I18nextProvider i18n={i18n}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </I18nextProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
