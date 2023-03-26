import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@screens/home/Home";
import Welcome from "@screens/welcome/Welcome";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "@styles/theme/theme";
import { Platform } from "react-native";

const HomeTabs = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

interface RouterProps {
  isFirstTimeOpen: boolean;
}
const HomeRoutes = () => (
  <HomeTabs.Navigator
    // tabBar={() => <TabBar />}
    screenOptions={{
      tabBarStyle: {
        backgroundColor: theme.colors.dark,
      },
      tabBarItemStyle: {
        top: Platform.OS === "ios" ? 10 : 5,
      },
      headerShown: false,
      tabBarLabelPosition: "beside-icon",
      tabBarActiveTintColor: "white",
      tabBarLabelStyle: {
        fontFamily: theme.fontFamily.semi,
        fontSize: 16,
      },
    }}
  >
    <HomeTabs.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => (
          <Octicons
            name="home"
            size={24}
            color={focused ? "white" : theme.colors.gray500}
          />
        ),
      }}
    />
    <HomeTabs.Screen
      name="Search"
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => (
          <AntDesign
            name="search1"
            size={24}
            color={focused ? "white" : theme.colors.gray500}
          />
        ),
      }}
    />
  </HomeTabs.Navigator>
);

export const Router = ({ isFirstTimeOpen }: RouterProps) => (
  <HomeStack.Navigator
    initialRouteName={isFirstTimeOpen ? "Welcome" : "HomeStack"}
    screenOptions={{ headerShown: false }}
  >
    <HomeStack.Screen name="HomeStack" component={HomeRoutes} />

    <HomeStack.Screen name="Welcome" component={Welcome} />
  </HomeStack.Navigator>
);
