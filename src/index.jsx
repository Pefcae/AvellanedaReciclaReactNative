import { useFonts } from 'expo-font';
import { View, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux'; //cargamos esto

import { THEME } from './constants/theme';
import { init } from './db';
import AppNavigator from './navigation';
import store from './store'; // cargamos esto
import { styles } from './styles';

init()
  .then(() => {
    console.log("Initialized database");
  })
  .catch((err) => {
    console.log("Initializing db failed.", err);
  });
  
const App = () => {
  const [loaded] = useFonts({
    'Bitter-Regular': require('../assets/fonts/Bitter-Regular.ttf'),
    'Bitter-Bold': require('../assets/fonts/Bitter-Bold.ttf'),
    'Bitter-Light': require('../assets/fonts/Bitter-Light.ttf'),
    'Bitter-Medium': require('../assets/fonts/Bitter-Medium.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={THEME.colors.primary} />
      </View>
    );
  }
  //agregamos el provider y el sotre
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
