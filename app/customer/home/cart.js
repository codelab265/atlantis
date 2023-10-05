import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useCartContext } from "../../../src/context/CartContext";
import CartItem from "../../../src/components/CartItem";
import { Button } from "react-native-paper";
import { useNavigation } from "expo-router";

const cart = () => {
  const { cart } = useCartContext();
  const getTotalAmountToPay = () =>
    cart.reduce((sum, item) => sum + item.totalPrice, 0).toFixed(2);

    const router = useNavigation();
  return (
    <View className="flex-1">
      <View className="flex-1 p-4">
        <ScrollView>
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </ScrollView>
      </View>
      {cart.length > 0 && (
        <View className="p-4">
          <View className="flex flex-row items-center space-x-2">
            <Text className="font-Poppins_500 text-base">Total Price:</Text>
            <Text className="font-Poppins_500 text-base text-green-500">
              ₱ {getTotalAmountToPay()}
            </Text>
          </View>
          <View className="mt-2">
            <Button mode="contained" className="bg-green-500" onPress={()=>router.navigate("customer/checkout")}>
              <Text className="text-base font-Poppins_500">Proceed</Text>
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};

export default cart;
