import * as React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { appRoutes } from "./route";

export const AppRoute = () => {
  const Stack: any = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      {appRoutes.map((route: any, index: any) => (
        <Stack.Screen
          key={index}
          name={route.name}
          component={route.component}
          options={route.option}
        />
      ))}
    </Stack.Navigator>
  );
};
