import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './screens/home';
import {DetailsScreen} from './screens/details';
import {GetStartedScreen} from './screens/getStarted';
import {OnboardingScreen} from './screens/onboarding';
import {LoginScreen} from './screens/login';
import {SignUpScreen} from './screens/signUp';
import {HomeIcon} from './components/icons/Home';
import {CartIcon} from './components/icons/Cart';
import {NotesIcon} from './components/icons/Notes';
import {UserIcon} from './components/icons/User';
import {RouteProp} from '@react-navigation/native';
import {CartScreen} from './screens/cart';
import {OrdersScreen} from './screens/orders';
import {AccountScreen} from './screens/account';

type RootParamList = {
  Main: undefined;
  Cart: undefined;
  Orders: undefined;
  Account: undefined;
};

type TabBarIconProps = {
  route: RouteProp<RootParamList, keyof RootParamList>;
  focused: boolean;
  color: string;
  size: number;
};

const Tab = createBottomTabNavigator<RootParamList>();

const icons = {
  Main: {
    lib: HomeIcon,
  },
  Cart: {
    lib: CartIcon,
  },
  Orders: {
    lib: NotesIcon,
  },
  Account: {
    lib: UserIcon,
  },
};

const Stack2 = createNativeStackNavigator();
export const MainStack = () => {
  return (
    <Stack2.Navigator initialRouteName="Home">
      <Stack2.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack2.Screen
        name="Details"
        component={DetailsScreen}
        options={{headerShown: false}}
      />
    </Stack2.Navigator>
  );
};

export const Navigation = () => {
  const renderTabBarIcon = ({route, color}: TabBarIconProps) => {
    const {lib: Icon} = icons[route.name];
    return <Icon color={color} />;
  };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: args => renderTabBarIcon({route, ...args}),
        tabBarStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: '#fff',
        tabBarInactiveBackgroundColor: '#fff',
        tabBarActiveTintColor: '#FE8C00',
        tabBarInactiveTintColor: '#000',
      })}>
      <Tab.Screen name="Main" component={MainStack} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
export const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="SlideOne">
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStartedScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="App"
        component={Navigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
