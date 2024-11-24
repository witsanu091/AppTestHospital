// import { NavbarRoute } from "./navbar.route";
// import HeaderApp from "../components/HeaderApp";
import HealthExamScreen from "../views/health-examination/HealthExam";
import HealthExamDetailsScreen from "../views/health-examination/HealthExamDetail";
import HomeScreen from "../views/home/HomeScreen";
// import HomeScreen from "../views/home/HomeScreen";
// import HealthExam from "../views/health-examination/HealthExam";
// import ProfileScreen from "../views/profile/ProfileScreen";

interface routeMap {
  name: string;
  component: any;
  option: object;
  icon?: string;
}

export const defaultRoutes: routeMap[] = [
  // {
  //   name: "Home",
  //   component: HomeScreen,
  //   option: { headerShown: true },
  //   icon: "home",
  // },
  {
    name: "Health",
    component: HealthExamScreen,
    option: { headerShown: false },
    icon: "wallet",
  },
  {
    name: "HealthDetail",
    component: HealthExamDetailsScreen,
    option: { headerShown: false },
    icon: "wallet",
  },
  // {
  //   name: "HealthExam",
  //   component: HealthExam,
  //   option: { headerShown: false },
  //   icon: "bank",
  // },

];

export const guestRoutes: routeMap[] = [
  ...defaultRoutes
];

export const secureRoutes: routeMap[] = [
  ...defaultRoutes
];

export const appRoutes: routeMap[] = [
  ...defaultRoutes
  ,
  // {
  //   name: "HomeTab",
  //   component: NavbarRoute,
  //   option: { headerShown: false },
  // },

  // {
  //   name: "HeaderApp",
  //   component: HeaderApp,
  //   option: { headerShown: false },

  // }
];
