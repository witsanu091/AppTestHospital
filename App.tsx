
import * as React from 'react';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
AwesomeIcon.loadFont();
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoute } from './src/navigations/app.route';

function App(): React.JSX.Element {
  const theme = {
    ...DefaultTheme,
  }
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <AppRoute />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
