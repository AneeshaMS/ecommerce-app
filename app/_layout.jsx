import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { CartProvider } from "../context/CartContext";

const _layout = () => {
  return (
    <CartProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </CartProvider>
  );
};

export default _layout;

const styles = StyleSheet.create({});
