import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import {
  Overpass_700Bold,
  Overpass_600SemiBold,
  Overpass_400Regular,
  Overpass_300Light,
} from "@expo-google-fonts/overpass";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { ThemeProvider } from "styled-components/native";
import { theme } from "@styles/theme/theme";
import { useState, useEffect, useCallback } from "react";
import { Router } from "src/routes/router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [isFirstTimeOpenApp, setIsFirstTimeOpenApp] = useState<boolean>();
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Overpass_700Bold,
          Overpass_600SemiBold,
          Overpass_400Regular,
          Overpass_300Light,
        });

        const firstTimeOpen = await AsyncStorage.getItem(
          "@findWeather:firstOpenApp"
        );

        setIsFirstTimeOpenApp(firstTimeOpen === null);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && isFirstTimeOpenApp !== undefined) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, isFirstTimeOpenApp]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer onReady={onLayoutRootView}>
          <Router isFirstTimeOpen={isFirstTimeOpenApp} />
          <StatusBar style="light" />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
