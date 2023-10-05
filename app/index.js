import {
  KeyboardAvoidingView,
  Image,
  Text,
  View,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Logo from "../src/assets/v_logo.png";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="flex-1 p-4 px-6 flex items-center justify-center">
            <Image source={Logo} className="w-[200px] h-[200px] " />
            

            <View className="w-full mt-4">
              <Button
                className="bg-blue-500 w-full py-[4px]"
                onPress={()=> router.push('buyer/login')}
                uppercase
                
              >
                <Text className="text-blue-100 font-Poppins_500 text-base">
                  Customer
                </Text>
              </Button>
            </View>
            <View className="w-full mt-4">
              <Button
                className="w-full py-[4px] border-2 border-blue-500 border-l-blue-500"
                onPress={()=>{}}
                mode="outlined"
                uppercase
                
                
              >
                <Text className="text-blue-400 font-Poppins_500 text-base">
                  Rider
                </Text>
              </Button>
            </View>
            
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
