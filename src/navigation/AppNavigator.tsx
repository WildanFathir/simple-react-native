import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HouseIcon from '../assets/icons/home';
import DetailsIcon from '../assets/icons/details';
import ProfileIcon from '../assets/icons/profile';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export type BottomTabParamList = {
  Home: undefined;
  Details: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const renderTabBarIcon =
  (route: {name: string}) =>
  ({color, size}: {color: string; size: number}) => {
    if (route.name === 'Home') {
      return <HouseIcon width={size} height={size} fill={color} />;
    } else if (route.name === 'Details') {
      return <DetailsIcon width={size} height={size} fill={color} />;
    } else if (route.name === 'Profile') {
      return <ProfileIcon width={size} height={size} fill={color} />;
    }
  };

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: renderTabBarIcon(route),
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Details"
          component={DetailsScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
