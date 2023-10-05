import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from "react-native";
import Colors from "../../../src/shared/Colors";
import { useCartContext } from "../../../src/context/CartContext";

export default function () {
  const { cart } = useCartContext();
  return (
    
      <Tabs
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          tabBarShowLabel: false,
          tabBarStyle: { paddingVertical: 10, height: 70, marginVertical: 0 },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: "#666",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View className="flex flex-col items-center justify-center">
                <FontAwesome name="home" size={20} color={color} />
                <Text
                  className={focused ? "font-Poppins_500" : "font-Poppins_400"}
                  style={{ color: color }}
                >
                  Home
                </Text>
              </View>
            ),
            headerTitle: "Home",
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View className="flex flex-col items-center justify-center">
                <FontAwesome name="shopping-cart" size={20} color={color} />
                <Text
                  className={focused ? "font-Poppins_500" : "font-Poppins_400"}
                  style={{ color: color }}
                >
                  Cart
                </Text>
              </View>
            ),
            tabBarBadge:parseInt(cart.length),
            headerTitle: "Cart",
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View className="flex flex-col items-center justify-center">
                <FontAwesome name="list" size={20} color={color} />
                <Text
                  className={focused ? "font-Poppins_500" : "font-Poppins_400"}
                  style={{ color: color }}
                >
                  Orders
                </Text>
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View className="flex flex-col items-center justify-center">
                <FontAwesome name="user" size={20} color={color} />
                <Text
                  className={focused ? "font-Poppins_500" : "font-Poppins_400"}
                  style={{ color: color }}
                >
                  Profile
                </Text>
              </View>
            ),
          }}
        />
      </Tabs>
    
  );
}
