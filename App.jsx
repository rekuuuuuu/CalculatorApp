import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import { EquationListScreen } from "./screens/EquationListScreen";
import { TriangleAreaScreen } from "./screens/TriangleAreaScreen";
import { RectangleAreaScreen } from "./screens/RectangleAreaScreen";
import { CircleAreaScreen } from "./screens/CircleAreaScreen";
import { TrapezoidAreaScreen } from "./screens/TrapezoidAreaScreen";
import { TriangleVolumeScreen } from "./screens/TriangleVolumeScreen";
import { PyramidVolumeScreen } from "./screens/PyramidVolumeScreen";
import { ElectronicScreen } from "./screens/ElectronicScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const EquationStack = () => (
  <Stack.Navigator
    initialRouteName="EquationList"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#467FD3",
        height: 104
      },
      headerTitleStyle: {
        color: "#ffffff",
        fontSize: 25,
        lineHeight: 32,
        fontWeight: "bold",
        marginBottom: 8
      },
      headerTitle: "Calculator App",
      headerTitleAlign: "center",
      headerTintColor: "#ffffff",
      headerBackTitle: "Back",
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      gestureEnabled: true,
      gestureDirection: "horizontal"
    }}
  >
    <Stack.Screen
      name="EquationList"
      component={EquationListScreen}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
      }}
    />
    <Stack.Screen name="TriangleArea" component={TriangleAreaScreen} />
    <Stack.Screen name="RectangleArea" component={RectangleAreaScreen} />
    <Stack.Screen name="CircleArea" component={CircleAreaScreen} />
    <Stack.Screen name="TrapezoidArea" component={TrapezoidAreaScreen} />
    <Stack.Screen name="TriangleVolume" component={TriangleVolumeScreen} />
    <Stack.Screen name="PyramidVolume" component={PyramidVolumeScreen} />
    <Stack.Screen name="Electronic" component={ElectronicScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={EquationStack}
          options={{
            tabBarIcon: ({ color, size }) => <FontAwesome5 name="home" size={size} color={color} />
          }}
        />
        <Tab.Screen
          name="Electronic"
          component={ElectronicScreen}
          options={{
            tabBarIcon: ({ color, size }) => <FontAwesome5 name="calculator" size={size} color={color} />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
