import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Cadastrar from './components/cadastrar';
import Listar from './components/listar';

const Tabs = createBottomTabNavigator();
    export default function App() {
    return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name='Cadastrar' component={Cadastrar}/>
        <Tabs.Screen name='Listar' component={Listar} />
      </Tabs.Navigator>
    </NavigationContainer>       
        );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
