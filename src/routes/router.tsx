import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@screens/home/Home";
import Welcome from "@screens/welcome/Welcome";
import { View } from "react-native";

const HomeTabs = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

const HomeRoutes = () => (
  <HomeTabs.Navigator screenOptions={{ headerShown: false }}>
    <HomeTabs.Screen name="Home" component={Home} />
    <HomeTabs.Screen name="Search" component={Home} />
  </HomeTabs.Navigator>
);

export const Router = ({ isFirstTimeOpen }) => (
  <HomeStack.Navigator
    initialRouteName={isFirstTimeOpen ? "Welcome" : "HomeStack"}
    screenOptions={{ headerShown: false }}
  >
    <HomeStack.Screen name="HomeStack" component={HomeRoutes} />

    <HomeStack.Screen name="Welcome" component={Welcome} />
  </HomeStack.Navigator>
);
