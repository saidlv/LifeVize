import 'react-native-gesture-handler';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {connect, Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import reducers from './reducers';
import SplashScreen from './Screens/SplashScreen';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
import CategoriesScreen from './Screens/CategoriesScreen';
import SubCategoriesScreen from './Screens/SubCategoriesScreen';
import VerificationCodeScreen from './Screens/VerificationCodeScreen';
import ApprovalWaitingScreen from './Screens/ApprovalWaitingScreen';
import ZipCodeScreen from './Screens/ZipCodeScreen';
import AdviserHomeScreen from './Screens/AdviserHomeScreen';
import AdviserDetailViewScreen from './Screens/AdviserDetailViewScreen';
import ChatScreen from './Screens/ChatScreen';
import ProfileScreen from './Screens/ProfileScreen';
import NotificationScreen from './Screens/NotificationScreen';
import UserChatScreen from './Screens/UserChatScreen';
import SessionDetailScreen from './Screens/SessionDetailScreen';
import UserProfileScreen from './Screens/UserProfileScreen';
import SessionHistoryScreen from './Screens/SessionHistoryScreen';
import EditProfileScreen from './Screens/EditProfileScreen';
import ChangePasswordScreen from './Screens/ChangePasswordScreen';
import UserHomeScreen from './Screens/UserHomeScreen';
import UserSubCategoryScreen from './Screens/UserSubCategoryScreen';
import SubCategoryDetailScreen from './Screens/SubCategoryDetailScreen';
import SessionTimerScreen from './Screens/SessionTimerScreen';
import PaymentMethodScreen from './Screens/PaymentMethodScreen';
import PaymentConfirmationPage from './Screens/PaymentConfirmationPage';
import ForgotPasswordScreen from './Screens/ForgotPasswordScreen';
import ResetPasswordScreen from './Screens/ResetPasswordScreen';
import CustomDrawerContent from './Drawer/CustomDrawerContent';

const StackNavigator = createStackNavigator();
const BottomTabNavigator = createBottomTabNavigator();
const SideTabNavigator = createDrawerNavigator();

function AdviserSideDrawerNavigator({route}) {
  const {credentials} = route.params;
  console.log(credentials);
  return (
    <SideTabNavigator.Navigator
      drawerContent={function (props) {
        return <CustomDrawerContent {...props} />;
      }}
      screenOptions={{headerShown: false}}
      initialRouteName="AdviserBottomTabNavigatorScreen">
      <SideTabNavigator.Screen
        name="AdviserBottomTabNavigatorScreen"
        component={
          credentials === 'user'
            ? UserBottomTabNavigatorScreen
            : AdviserBottomTabNavigatorScreen
        }
        options={{drawerItemStyle: {display: 'none'}}}
      />
    </SideTabNavigator.Navigator>
  );
}

function AdviserScreensNavigator() {
  return (
    <StackNavigator.Navigator screenOptions={{headerShown: false}}>
      <StackNavigator.Screen
        name="AdviserHomeScreen"
        component={AdviserHomeScreen}
      />
      <StackNavigator.Screen
        name="AdviserDetailsScreen"
        component={AdviserDetailViewScreen}
      />
    </StackNavigator.Navigator>
  );
}

function UserScreenNavigator() {
  return (
    <StackNavigator.Navigator screenOptions={{headerShown: false}}>
      <StackNavigator.Screen name="UserHomeScreen" component={UserHomeScreen} />
      <StackNavigator.Screen
        name="UserSubCategoryScreen"
        component={UserSubCategoryScreen}
      />
      <StackNavigator.Screen
        name="SubCategoryDetailScreen"
        component={SubCategoryDetailScreen}
      />
      <StackNavigator.Screen
        name="SessionTimerScreen"
        component={SessionTimerScreen}
      />
    </StackNavigator.Navigator>
  );
}

function ChatScreenNavigator() {
  return (
    <StackNavigator.Navigator screenOptions={{headerShown: false}}>
      <StackNavigator.Screen name="ChatDetailScreen" component={ChatScreen} />
      <StackNavigator.Screen name="UserChatScreen" component={UserChatScreen} />
    </StackNavigator.Navigator>
  );
}

function AdviserBottomTabNavigatorScreen() {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {borderTopColor: 'white', borderTopWidth: 0, elevation: 0},
      }}>
      <BottomTabNavigator.Screen
        name="AdviserScreensNavigator"
        component={AdviserScreensNavigator}
        options={{
          tabBarIcon: function ({color}) {
            return <FontAwesome name="home" size={30} color={color} />;
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#8C85FF',
        }}
      />
      <BottomTabNavigator.Screen
        name="Chat"
        component={ChatScreenNavigator}
        options={{
          tabBarIcon: function ({color}) {
            // return <FontAwesome name="comment" size={30} color={color} />;
            return <IonIcons name="chatbox-ellipses" size={30} color={color} />;
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#8C85FF',
        }}
      />
      <BottomTabNavigator.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: function ({color}) {
            return (
              <IonIcons name="notifications-circle" size={30} color={color} />
            );
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#8C85FF',
        }}
      />
      <BottomTabNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: function ({color}) {
            return <FontAwesome name="user" size={30} color={color} />;
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#8C85FF',
        }}
      />
    </BottomTabNavigator.Navigator>
  );
}

function UserBottomTabNavigatorScreen() {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {borderTopColor: 'white', borderTopWidth: 0, elevation: 0},
      }}>
      <BottomTabNavigator.Screen
        name="UserScreenNavigator"
        component={UserScreenNavigator}
        options={{
          tabBarIcon: function ({color}) {
            return <FontAwesome name="home" size={30} color={color} />;
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#8C85FF',
        }}
      />
      <BottomTabNavigator.Screen
        name="Chat"
        component={ChatScreenNavigator}
        options={{
          tabBarIcon: function ({color}) {
            // return <FontAwesome name="comment" size={30} color={color} />;
            return <IonIcons name="chatbox-ellipses" size={30} color={color} />;
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#8C85FF',
        }}
      />
      <BottomTabNavigator.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: function ({color}) {
            return (
              <IonIcons name="notifications-circle" size={30} color={color} />
            );
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#8C85FF',
        }}
      />
      <BottomTabNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: function ({color}) {
            return <FontAwesome name="user" size={30} color={color} />;
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#8C85FF',
        }}
      />
    </BottomTabNavigator.Navigator>
  );
}

function App() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <NavigationContainer>
        <StackNavigator.Navigator
          initialRouteName="Splash"
          screenOptions={{headerShown: false}}>
          <StackNavigator.Screen name="Splash" component={SplashScreen} />
          <StackNavigator.Screen name="Login" component={LoginScreen} />
          <StackNavigator.Screen name="Signup" component={SignupScreen} />
          <StackNavigator.Screen
            name="Categories"
            component={CategoriesScreen}
          />
          <StackNavigator.Screen
            name="SubCategories"
            component={SubCategoriesScreen}
          />
          <StackNavigator.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
          />
          <StackNavigator.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          <StackNavigator.Screen
            name="VerificationCode"
            component={VerificationCodeScreen}
          />
          <StackNavigator.Screen
            name="ApprovalWaiting"
            component={ApprovalWaitingScreen}
          />
          <StackNavigator.Screen
            name="BottomTabNavigator"
            component={AdviserBottomTabNavigatorScreen}
          />
          <StackNavigator.Screen
            name="AdviserSideDrawerNavigator"
            component={AdviserSideDrawerNavigator}
          />
          <StackNavigator.Screen name="ZipCode" component={ZipCodeScreen} />
          {/* <StackNavigator.Screen
            name="UserChatScreen"
            component={UserChatScreen}
          /> */}
          <StackNavigator.Screen
            name="SessionDetailScreen"
            component={SessionDetailScreen}
          />
          <StackNavigator.Screen
            name="UserProfileScreen"
            component={UserProfileScreen}
          />
          <StackNavigator.Screen
            name="SessionHistoryScreen"
            component={SessionHistoryScreen}
          />
          <StackNavigator.Screen
            name="EditProfileScreen"
            component={EditProfileScreen}
          />
          <StackNavigator.Screen
            name="ChangePasswordScreen"
            component={ChangePasswordScreen}
          />
          <StackNavigator.Screen
            name="PaymentMethodScreen"
            component={PaymentMethodScreen}
          />
          <StackNavigator.Screen
            name="PaymentConfirmationPage"
            component={PaymentConfirmationPage}
          />
        </StackNavigator.Navigator>
      </NavigationContainer>
    </Provider>
  );

  // return (
  //   <Provider store={createStore(reducers, applyMiddleware(thunk))}>
  //     <NavigationContainer>
  //       <StackNavigator.Navigator
  //         initialRouteName="Splash"
  //         screenOptions={{headerShown: false}}>
  //         <StackNavigator.Screen name="Splash" component={SplashScreen} />
  //         <StackNavigator.Screen name="Login" component={LoginScreen} />
  //         <StackNavigator.Screen name="Signup" component={SignupScreen} />
  //         <StackNavigator.Screen
  //           name="VerificationCode"
  //           component={VerificationCodeScreen}
  //         />
  //         <StackNavigator.Screen
  //           name="ForgotPasswordScreen"
  //           component={ForgotPasswordScreen}
  //         />
  //         <StackNavigator.Screen
  //           name="ApprovalWaiting"
  //           component={ApprovalWaitingScreen}
  //         />
  //         <StackNavigator.Screen
  //           name="ChangePasswordScreen"
  //           component={ChangePasswordScreen}
  //         />
  //         <StackNavigator.Screen
  //           name="PaymentMethodScreen"
  //           component={PaymentMethodScreen}
  //         />
  //         <StackNavigator.Screen
  //           name="PaymentConfirmationPage"
  //           component={PaymentConfirmationPage}
  //         />
  //         {/* <StackNavigator.Screen
  //           name="BottomTabNavigator"
  //           component={AdviserBottomTabNavigatorScreen}
  //         /> */}
  //         <StackNavigator.Screen
  //           name="AdviserSideDrawerNavigator"
  //           component={AdviserSideDrawerNavigator}
  //         />
  //         <StackNavigator.Screen name="ZipCode" component={ZipCodeScreen} />
  //         <StackNavigator.Screen
  //           name="UserChatScreen"
  //           component={UserChatScreen}
  //         />
  //         <StackNavigator.Screen
  //           name="SessionDetailScreen"
  //           component={SessionDetailScreen}
  //         />
  //         <StackNavigator.Screen
  //           name="UserProfileScreen"
  //           component={UserProfileScreen}
  //         />
  //         <StackNavigator.Screen
  //           name="SessionHistoryScreen"
  //           component={SessionHistoryScreen}
  //         />
  //         <StackNavigator.Screen
  //           name="EditProfileScreen"
  //           component={EditProfileScreen}
  //         />
  //       </StackNavigator.Navigator>
  //     </NavigationContainer>
  //   </Provider>
  // );
}

export default App;
