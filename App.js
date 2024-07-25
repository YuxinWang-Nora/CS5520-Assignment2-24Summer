import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Activities from './Screens/Activities';
import Diet from './Screens/Diet';
import Settings from './Screens/Settings';
import AddActivities from './Screens/AddActivities';
import AddDiet from './Screens/AddDiet';
import commonStyles from './Styles/CommonStyles';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = ({ }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Activities') {
            iconName = 'bicycle';
          } else if (route.name === 'Diet') {
            iconName = 'fast-food';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerStyle: {
          backgroundColor: 'purple',
        },
        headerTintColor: 'white',
      })}
    >
      <Tab.Screen name="Activities" component={Activities} />
      <Tab.Screen name="Diet" component={Diet} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'purple',
          },
          headerTintColor: 'white',
        }}>
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false, title: '' }} />
        <Stack.Screen
          name="AddActivities"
          component={AddActivities}
          options={{ title: 'Add An Activitie' }} />
        <Stack.Screen
          name="AddDiet"
          component={AddDiet}
          options={{ title: 'Add A Diet Entry' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

