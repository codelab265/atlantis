import { SplashScreen, Stack } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import { StatusBar } from "expo-status-bar";
import Colors from "../src/shared/Colors";
import { AuthProvider, useAuthContext } from "../src/context/AuthContext";
import { PaperProvider } from "react-native-paper";
import { CartContextProvider } from "../src/context/CartContext";

export default () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <SplashScreen />;
  }

  return (
    <>
      <StatusBar backgroundColor={Colors.primary} />
      <AuthProvider>
        <CartContextProvider>
          <PaperProvider>
            <Stack
              screenOptions={{
                headerTintColor: "#fff",
                headerStyle: { backgroundColor: Colors.primary },
                headerTitleAlign: "center",
              }}
            >
              <Stack.Screen
                name="index"
                options={{ headerTitle: "Home", headerShown: false }}
              />
              <Stack.Screen
                name="SplashScreen"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="customer/login"
                options={{ headerTitle: "Customer Login" }}
              />
              <Stack.Screen
                name="customer/register"
                options={{ headerTitle: "Customer Register" }}
              />
              <Stack.Screen
                name="customer/home"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="customer/checkout"
                options={{ headerTitle: "Checkout" }}
              />
            </Stack>
          </PaperProvider>
        </CartContextProvider>
      </AuthProvider>
    </>
  );
};
