import { Controller, useForm } from "react-hook-form";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Layout from "../components/Layout";

const FormScreen = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Layout>
      <View
        style={{
          marginTop: 20,
          padding: 20,
          flex: 1,
          gap: 10,
        }}
      >
        <Text>Login</Text>
        <Controller
          control={control}
          name="email"
          rules={{ required: "Email is required" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              style={styles.input}
              onChangeText={onChange}
              value={value}
              //   name="email"
              //   register={("email", { required: "Email is required" })}
              //   errors={errors.email}
            />
          )}
        />
        {errors.email && <Text>{errors.email.message}</Text>}
        {/* Password */}
        <Controller
          control={control}
          name="password"
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.input}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        {errors.password && <Text>{errors.password.message}</Text>}
        {/* <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          name="password"
          register={("password", { required: "password is required" })}
          errors={errors.password}
        /> */}
        <Button title="Login" onPress={handleSubmit(onSubmit)} />
      </View>
    </Layout>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  input: {
    borderColor: "#F08626",
    borderWidth: 1,
  },
});
