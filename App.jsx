import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import { EquationListScreen } from "./screens/EquationListScreen";
import { TriangleAreaScreen } from "./screens/TriangleAreaScreen";
import { RectangleAreaScreen } from "./screens/RectangleAreaScreen";
import { CircleAreaScreen } from "./screens/CircleAreaScreen";
import { TriangleVolumeScreen } from "./screens/TriangleVolumeScreen";
import { PyramidVolumeScreen } from "./screens/PyramidVolumeScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
        <Stack.Screen name="TriangleVolume" component={TriangleVolumeScreen} />
        <Stack.Screen name="PyramidVolume" component={PyramidVolumeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
