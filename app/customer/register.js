import React from "react";
import { KeyboardAvoidingView, Text, View, ScrollView } from "react-native";

import { Button, RadioButton, TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import * as Yup from "yup";
import { useAuthContext } from "../../src/context/AuthContext";
import { useFormik } from "formik";

const register = () => {
  const [gender, setGender] = React.useState(false);
  const { Register, Loading } = useAuthContext();
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    gender: Yup.string().required("Gender is required"),
    phase: Yup.string().required("Required"),
    block: Yup.string().required("Required"),
    lot: Yup.string().required("Required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      age: "",
      password: "",
      phase:"",
      block:"",
      lot:"",
    },
    validationSchema,
    onSubmit: (values) => {
      Register(values);
    },
  });

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 p-4 px-6">
          <Text className="font-Poppins_500 text-lg mt-2">
            Personal Information
          </Text>
          <View className="w-full mt-2">
            <TextInput
              label={"Name"}
              mode="outlined"
              keyboardType="default"
              outlineColor="#ddd"
              onChangeText={formik.handleChange("name")}
              onBlur={formik.handleBlur("name")}
              value={formik.values.name}
              error={formik.touched.name && formik.errors.name}
            />
            {formik.touched.name && formik.errors.name && (
              <Text className="text-xs font-Poppins_400 text-red-500">
                {formik.errors.name}
              </Text>
            )}
          </View>
          <View className="w-full mt-2 bg-white border border-[#ddd] rounded-md p-1 px-4">
            <Text className="text-base font-Poppins_400">Gender</Text>
            <RadioButton.Group
              onValueChange={formik.handleChange("gender")}
              value={formik.values.gender}
            >
              <View className="flex flex-row gap-x-4">
                <View className="flex flex-row items-center">
                  <Text className="text-small font-Poppins_400">Male</Text>
                  <RadioButton value="Male" />
                </View>
                <View className="flex flex-row items-center">
                  <Text className="text-small font-Poppins_400">Female</Text>
                  <RadioButton value="Female" />
                </View>
              </View>
            </RadioButton.Group>
            {formik.touched.gender && formik.errors.gender && (
              <Text className="text-xs font-Poppins_400 text-red-500">
                {formik.errors.gender}
              </Text>
            )}
          </View>
          <View className="w-full mt-2">
            <TextInput
              label={"Phone Number"}
              mode="outlined"
              keyboardType="phone-pad"
              outlineColor="#ddd"
              onChangeText={formik.handleChange("phoneNumber")}
              onBlur={formik.handleBlur("phoneNumber")}
              value={formik.values.phoneNumber}
              error={formik.touched.phoneNumber && formik.errors.phoneNumber}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <Text className="text-xs font-Poppins_400 text-red-500">
                {formik.errors.phoneNumber}
              </Text>
            )}
          </View>

          <Text className="font-Poppins_500 text-lg mt-4">Address</Text>

          <View className="w-full mt-2 flex flex-row justify-between">
            <View className="w-[30%]">
              <TextInput
                label={"Phase"}
                mode="outlined"
                keyboardType="email-address"
                outlineColor="#ddd"
                onChangeText={formik.handleChange("phase")}
                onBlur={formik.handleBlur("phase")}
                value={formik.values.phase}
                error={formik.touched.phase && formik.errors.phase}
              />
              {formik.touched.phase && formik.errors.phase && (
                <Text className="text-xs font-Poppins_400 text-red-500">
                  {formik.errors.phase}
                </Text>
              )}
            </View>
            <View className="w-1/3">
              <TextInput
                label={"Block"}
                mode="outlined"
                keyboardType="email-address"
                outlineColor="#ddd"
                onChangeText={formik.handleChange("block")}
                onBlur={formik.handleBlur("block")}
                value={formik.values.block}
                error={formik.touched.block && formik.errors.block}
              />
              {formik.touched.block && formik.errors.block && (
                <Text className="text-xs font-Poppins_400 text-red-500">
                  {formik.errors.block}
                </Text>
              )}
            </View>
            <View className="w-1/3">
              <TextInput
                label={"Lot"}
                mode="outlined"
                keyboardType="default"
                outlineColor="#ddd"
                onChangeText={formik.handleChange("lot")}
                onBlur={formik.handleBlur("lot")}
                value={formik.values.lot}
                error={formik.touched.lot && formik.errors.lot}
              />
              {formik.touched.lot && formik.errors.lot && (
                <Text className="text-xs font-Poppins_400 text-red-500">
                  {formik.errors.lot}
                </Text>
              )}
            </View>
          </View>

          <Text className="font-Poppins_500 text-lg mt-4">Credentials</Text>

          <View className="w-full mt-2 ">
            <TextInput
              label={"Email Address"}
              mode="outlined"
              keyboardType="email-address"
              outlineColor="#ddd"
              onChangeText={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              value={formik.values.email}
              error={formik.touched.email && formik.errors.email}
            />
            {formik.touched.email && formik.errors.email && (
              <Text className="text-xs font-Poppins_400 text-red-500">
                {formik.errors.email}
              </Text>
            )}
          </View>

          <View className="w-full mt-2">
            <TextInput
              label={"Password"}
              mode="outlined"
              secureTextEntry
              keyboardType="url"
              outlineColor="#ddd"
              onChangeText={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
              value={formik.values.password}
              error={formik.touched.password && formik.errors.password}
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
              onPress={formik.handleSubmit}
              loading={Loading}
              disabled={Loading}
            >
              <Text className="text-blue-100 font-Poppins_500 text-base">
                Sign up
              </Text>
            </Button>
          </View>
          <View className="flex flex-row items-center justify-center gap-x-2 mt-10">
            <Text className="font-Poppins_400 text-base">Have an account?</Text>
            <TouchableOpacity onPress={() => router.back()}>
              <Text className="font-Poppins_600 text-base text-blue-500">
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default register;
