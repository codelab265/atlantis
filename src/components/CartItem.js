import { View, Text } from "react-native";
import React from "react";
import { Avatar, Button, Divider, SegmentedButtons } from "react-native-paper";
import { BASE_URL2 } from "../config/API";
import { FontAwesome } from "@expo/vector-icons";
import { useCartContext } from "../context/CartContext";
import { TouchableOpacity } from "react-native-gesture-handler";

const CartItem = ({ item }) => {
  const { addProductQuantity, subtractProductQuantity, removeFromCart, } =
    useCartContext();

  return (
    <>
      <View className="flex flex-row items-center relative">
        <Avatar.Image
          source={{ uri: `${BASE_URL2}/${item.image}` }}
          size={120}
        />
        <View className="px-4 flex-1">
          <Text className="font-Poppins_600 text-base">{item.name}</Text>
          <View className="flex flex-row space-x-2 items-center">
            <Text className="font-Poppins_600 text-gray-500">Type:</Text>
            <Text className="font-Poppins_400 text-xs text-primary">
              {item.type}
            </Text>
          </View>
          <View className="flex flex-row space-x-2 items-center">
            <Text className="font-Poppins_600 text-gray-500">Total:</Text>
            <Text className="font-Poppins_400 text-xs text-primary">
              {item.totalPrice}
            </Text>
          </View>
          <View className="flex flex-row items-center justify-between w-full">
            <View className="flex flex-row items-center">
              <TouchableOpacity
                className="w-8 h-8 bg-primary rounded-full flex items-center justify-center"
                onPress={() => subtractProductQuantity(item.id)}
              >
                <FontAwesome name="minus" color={"white"} />
              </TouchableOpacity>
              <View className="w-10 h-10 flex items-center justify-center">
                <Text>{item.quantity}</Text>
              </View>
              <TouchableOpacity
                className="w-8 h-8 bg-primary rounded-full flex items-center justify-center"
                onPress={() => addProductQuantity(item.id)}
              >
                <FontAwesome name="plus" color={"white"} />
              </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity className="w-8 h-8 rounded-full flex items-center justify-center" onPress={()=>removeFromCart(item.id)}>
              <Text className="text-red-500">
                <FontAwesome name="times" />
              </Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <Divider className="my-2 h-[1px] bg-gray-200" />
    </>
  );
};

export default CartItem;
