import React from 'react';
//import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Home from './src/screens/Home';
import Hilla from './src/screens/Hilla';
import Galleria from './src/screens/Galleria';
import Kamera from './src/screens/Kamera';
import SpeechToText from './src/screens/SpeechToText';

import { HomeContextProvider } from './src/util/HomeContext';
import { Colors } from './src/constants';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <HomeContextProvider>
      <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Koti') {
              iconName = focused
                ? 'ios-home-sharp'
                : 'ios-home-outline';

                return <Ionicons name={iconName} size={size} color={color} />; 
            } else if (route.name === 'Hilla') {
              return <FontAwesome5 name="cat" size={size} color={color} />;
            } else if (route.name === 'Galleria') {
                iconName = focused ? 'ios-camera-sharp' : 'ios-camera-outline';
              return <Ionicons name={iconName} size={size} color={color} />; 
            } else {
              return <Ionicons name="ios-car" size={size} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'gray',
        }}
      >
          <Tab.Screen name="SpeechToText" component={SpeechToText} />
          <Tab.Screen name="Kamera" component={Kamera} />
          <Tab.Screen name="Galleria" component={Galleria} />
          <Tab.Screen name="Koti" component={Home} />
          <Tab.Screen name="Hilla" component={Hilla} />
        </Tab.Navigator>
        
      </NavigationContainer>
    </HomeContextProvider>
  );
}
