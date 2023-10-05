import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import { BASE_URL2 } from "../config/API";
import { Avatar, Button, SegmentedButtons } from "react-native-paper";
import Colors from "../shared/Colors";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";

const JarItem = ({ jar }) => {
  const { addToCart, cart } = useCartContext();
  const [optionType, setOptionType] = useState("");

  return (
    <View className="flex bg-white  rounded-lg mb-8 overflow-hidden relative border border-gray-300">
      <View className="flex items-center justify-center relative w-full h-[310px] object-cover">
        <Image
          source={{ uri: `${BASE_URL2}/${jar.image}` }}
          className="w-full h-full"
        />
        <View className="absolute w-1/2 h-full top-0 left-0 bg-black/50 z-10 p-2 ">
          <View>
            <Text className="uppercase font-Poppins_600 text-white">Name</Text>
            <Text className="font-Poppins_400 text-white">{jar.name}</Text>
          </View>
          <View>
            <Text className="uppercase font-Poppins_600 text-white">
              Litres
            </Text>
            <Text className="font-Poppins_400 text-white">{jar.liters}</Text>
          </View>
          <View>
            <Text className="uppercase font-Poppins_600 text-white">
              Refill Price
            </Text>
            <Text className="font-Poppins_400 text-white">
              {jar.refill_price}
            </Text>
          </View>
          <View>
            <Text className="uppercase font-Poppins_600 text-white">
              Container Price
            </Text>
            <Text className="font-Poppins_400 text-white">
              {jar.container_price}
            </Text>
          </View>
          <View>
            <Text className="uppercase font-Poppins_600 text-white text-xs">
              Available Containers for sell
            </Text>
            <Text className="font-Poppins_400 text-white">
              {jar.available_container}
            </Text>
          </View>
          <View>
            <Text className="uppercase font-Poppins_600 text-white text-xs">
              Available Containers for refill
            </Text>
            <Text className="font-Poppins_400 text-white">
              {jar.available_container}
            </Text>
          </View>
        </View>
      </View>
      <View className="px-4">
        <View className="mt-4">
          <SegmentedButtons
            value={optionType}
            onValueChange={(e) => setOptionType(e)}
            buttons={[
              {
                value: "refill",
                label: "Refill",
              },
              {
                value: "buy",
                label: "Buy",
              },
            ]}
          />
        </View>
        <Button
          mode="contained"
          className="my-4 bg-primary disabled:bg-blue-400"
          icon={"plus"}
          disabled={optionType ? false : true}
          onPress={() =>
            addToCart({
              ...jar,
              quantity: 1,
              type: optionType,
              totalPrice:
                optionType == "refill"
                  ? jar.refill_price * 1
                  : jar.container_price * 1,
              price: optionType =="refill" ? jar.refill_price : jar.container_price,
            })
          }
        >
          Add to cart
        </Button>
      </View>
    </View>
  );
};

export default JarItem;
