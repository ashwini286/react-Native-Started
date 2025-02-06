import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './container/screen/home';
import Product from './container/screen/product';
import Profile from './container/screen/profile';
import Search from './container/screen/search';

// const Stack = createNativeStackNavigator(); 
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Product" component={Product} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};
// const StackNavigator = () => {
//   return (
//     <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen name="Product" component={Product} />
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="Search" component={Search} />
//     </Stack.Navigator>
//   );
// };

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
      {/* <StackNavigator /> */}
    </NavigationContainer>
  );
};

export default App;
