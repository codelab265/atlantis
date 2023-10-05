import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Button, RadioButton, TextInput } from "react-native-paper";
import { useState } from "react";
import Colors from "../../src/shared/Colors";

const checkout = () => {
  const [orderType, setOrderType] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [address, setAddress] = useState("");
  const [phase, setPhase] = useState("");
  const [block, setBlock] = useState("");
  const [lot, setLot] = useState("");
  const [referenceId, setReferenceId] = useState("");


  const valid = ()=>{
    if(orderType!="" && paymentType!="" && address!=""){
        return false;
    }else{
        return true;
    }
  }


  
  
  return (
    <View className="flex-1 p-4">
      <ScrollView>
        <View className="mb-3 bg-white p-2 round-md">
          <Text className="font-Poppins_500 text-base">Select Order type:</Text>
          <RadioButton.Group
            onValueChange={(e) => setOrderType(e)}
            value={orderType}
          >
            <View className="flex flex-row space-x-3  mt-[2px]">
              <View className="flex flex-row items-center">
                <Text className="font-Poppins_400">Pick-up</Text>
                <RadioButton value="pick-up" />
              </View>
              <View className="flex flex-row items-center">
                <Text className="font-Poppins_400">COD</Text>
                <RadioButton value="COD" />
              </View>
            </View>
          </RadioButton.Group>
        </View>

        <View className="mb-3 bg-white p-2 round-md">
          <Text className="font-Poppins_500 text-base">Payment type:</Text>
          <RadioButton.Group
            onValueChange={(e) => setPaymentType(e)}
            value={paymentType}
          >
            <View className="flex flex-row space-x-3  mt-[2px]">
              <View className="flex flex-row items-center">
                <Text className="font-Poppins_400">Cash</Text>
                <RadioButton value="cash" />
              </View>
              <View className="flex flex-row items-center">
                <Text className="font-Poppins_400">Gcash</Text>
                <RadioButton value="Gcash" />
              </View>
            </View>
          </RadioButton.Group>
          {paymentType == "Gcash" && (
            <View className="mt-3">
              <TextInput
                mode="outlined"
                outlineColor="#ddd"
                placeholder="Gcash Reference ID"
                value={referenceId}
                onChangeText={(e)=>setReferenceId(e)}
              />
            </View>
          )}
        </View>

        <View className="mb-3 bg-white p-2 round-md">
          <Text className="font-Poppins_500 text-base">Delivery Address:</Text>
          <RadioButton.Group
            onValueChange={(e) => setAddress(e)}
            value={address}
          >
            <View className="flex flex-row space-x-3  mt-[2px]">
              <View className="flex flex-row items-center">
                <Text className="font-Poppins_400">My address</Text>
                <RadioButton value="my-address" />
              </View>
              <View className="flex flex-row items-center">
                <Text className="font-Poppins_400">New Address</Text>
                <RadioButton value="new-address" />
              </View>
            </View>
          </RadioButton.Group>
          {address == "new-address" && (
            <View className="mt-3 flex flex-row items-center justify-between">
              <TextInput
                mode="outlined"
                outlineColor="#ddd"
                placeholder="Phase"
                className="w-[30%]"
                value={phase}
                onChangeText={(e)=>setPhase(e)}

              />
              <TextInput
                mode="outlined"
                outlineColor="#ddd"
                placeholder="Block"
                className="w-[30%]"
                value={block}
                onChangeText={(e)=>setBlock(e)}
              />
              <TextInput
                mode="outlined"
                outlineColor="#ddd"
                placeholder="Lot"
                className="w-[30%]"
                value={lot}
                onChangeText={(e)=>setLot(e)}
              />
            </View>
          )}
        </View>

        <View>
          <Button className="bg-primary" disabled={!! valid()}>
            <Text className="text-blue-100 font-Poppins_500 py-1">Checkout</Text>
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default checkout;
