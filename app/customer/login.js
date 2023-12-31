import {
    KeyboardAvoidingView,
    Image,
    Text,
    View,
    ScrollView,
  } from "react-native";
  import { SafeAreaView } from "react-native-safe-area-context";
  
  import Logo from "../../src/assets/v_logo.png";
  import { Button, TextInput } from "react-native-paper";
  import { TouchableOpacity } from "react-native-gesture-handler";
  import { useRouter } from "expo-router";
  import { useFormik } from "formik";
  import * as Yup from "yup";
  import { useAuthContext } from "../../src/context/AuthContext";
  
  export default function login() {
    const router = useRouter();
  
    const { Login, Loading } = useAuthContext();
  
    const validationSchema = Yup.object().shape({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    });
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema,
      onSubmit: (values, { resetForm }) => {
        Login(values, resetForm);
        resetForm();
      },
    });
  
    return (
      <SafeAreaView style={{ flexGrow: 1 }}>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View className="flex-1 p-4 px-6 flex items-center justify-center">
              <Image source={Logo} className="w-[200px] h-[200px] " />
              
              <Text className="font-Poppins_500 self-start text-lg mt-10">
                Sign In
              </Text>
              <View className="w-full mt-2">
                <TextInput
                  label={"Email"}
                  mode="outlined"
                  keyboardType="email-address"
                  outlineColor="#ddd"
                  onChangeText={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <Text className="text-xs font-Poppins_400 text-red-500">
                    {formik.errors.email}
                  </Text>
                )}
              </View>
  
              <View className="w-full mt-4">
                <TextInput
                  label={"Password"}
                  mode="outlined"
                  secureTextEntry
                  outlineColor="#ddd"
                  onChangeText={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password && (
                  <Text className="text-xs font-Poppins_400 text-red-500">
                    {formik.errors.password}
                  </Text>
                )}
              </View>
  
              <View className="w-full mt-4">
                <Button
                  className="bg-blue-500 w-full py-[4px]"
                  onPress={() => router.push("home")}
                  loading={Loading}
                  disabled={Loading}
                >
                  <Text className="text-blue-100 font-Poppins_500 text-base">
                    Sign in
                  </Text>
                </Button>
              </View>
              <View className="flex-1 flex-row items-end gap-x-2 mt-10">
                <Text className="font-Poppins_400 text-base">
                  Don`t have an account?
                </Text>
                <TouchableOpacity onPress={() => router.push("customer/register")}>
                  <Text className="font-Poppins_600 text-base text-blue-500">
                    Sign up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
  