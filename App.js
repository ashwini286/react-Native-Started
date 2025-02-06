import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './container/screen/home';
import Product from './container/screen/product';
import Profile from './container/screen/profile';
import Search from './container/screen/search';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';


// const Stack = createNativeStackNavigator(); 
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Product" component={Product} 
      options={{
        tabBarActiveTintColor: 'red',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="product-hunt" color={color} size={size} />
        ),
      }}

      />
      <Tab.Screen name="Home" component={Home} 
      options={{
        tabBarActiveTintColor: 'purple',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen name="Profile" component={Profile} 
        options={{
          tabBarActiveTintColor: 'blue',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="face-man-profile" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Search" component={Search}
      options={{
        tabBarActiveTintColor: 'green',
        tabBarIcon: ({ color, size }) => (
          <Feather name="search" color={color} size={size} />
        ),
      }}
       />
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
