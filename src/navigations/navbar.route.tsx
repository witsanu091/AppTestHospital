// import * as React from 'react'

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { iConSizeHeader, themeColor } from "../styles/global";
// import AntDesign from "react-native-vector-icons/AntDesign";
// import { defaultRoutes, guestRoutes, secureRoutes } from "./route";


// export const NavbarRoute = () => {
//   const Tab = createBottomTabNavigator();
//   const isLogin = true;
//   return (
//     <Tab.Navigator
//       // initialRouteName="Home"
//       screenOptions={({ route }: any) => ({
//         tabBarIcon: ({ focused, color, size }: any) => {
//           // let routes = isLogin ? secureRoutes : guestRoutes;

//           let iconName: string = "";
//           for (let i of defaultRoutes) {
//             if (i.name == route.name) {
//               iconName = `${i.icon}`;
//               color = focused
//                 ? iConSizeHeader.colorIcon
//                 : themeColor.mainThemeColor;
//             }
//           }
//           return <AntDesign name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: iConSizeHeader.colorIcon,
//         tabBarInactiveTintColor: themeColor.grayColor,
//       })}
//     >
//       {
//         defaultRoutes.map((value: any, index: any) => (
//           <Tab.Screen
//             key={index}
//             name={value.name}
//             component={value.component}
//             options={value.option}
//           />
//         ))
//       }
//       {/* {isLogin ? secureRoutes.map((value: any, index: any) => (
//         <Tab.Screen
//           key={index}
//           name={value.name}
//           component={value.component}
//           options={value.option}
//         />
//       )) : guestRoutes.map((value, index) => (
//         <Tab.Screen
//           key={index}
//           name={value.name}
//           component={value.component}
//           options={value.option}
//         />
//       ))} */}
//     </Tab.Navigator>
//   );
// };