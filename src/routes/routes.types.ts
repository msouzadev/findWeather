import {
  NativeStackNavigationProp,
  NativeStackNavigatorProps,
} from "@react-navigation/native-stack/lib/typescript/src/types";

export type AppStack = {
  HomeStack: undefined;
  Home: undefined;
  Search: undefined;
};

export type AppRoutesType = NativeStackNavigationProp<AppStack>;
