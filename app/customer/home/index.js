import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { useCartContext } from "../../../src/context/CartContext";
import { useAuthContext } from "../../../src/context/AuthContext";
import JarItem from "../../../src/components/JarItem";
import { Divider } from "react-native-paper";

const index = () => {
  
  const { jar, userInfo } = useAuthContext();

  return (
    <View className="flex-1">
      <ScrollView className="flex-1">
        <View>
          <View className="p-4">
            <Text className="font-Poppins_600 text-xl text-gray-500">
              Welcome
            </Text>
            <Text className="text-base font-Poppins_500">{userInfo?.name}</Text>
          </View>
          <View className="mt-6 px-4">
            <Divider className="my-2" />
            {jar.map((item) => (
              <JarItem
                jar={item}
                key={item.id}
                
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default index;
