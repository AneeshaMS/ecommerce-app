import { Tabs } from "expo-router";
import { StyleSheet, Text } from "react-native";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarItemStyle: {
          backgroundColor: "#FFF",
          borderRadius: 10,
          margin: 10,
        },
        tabBarShowLabel: false,
        tabbarShowIcon: true,
        tabBarStyle: {
          backgroundColor: "#F08626",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => <Text>Home</Text>,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          headerShown: false,
          tabBarIcon: ({ focused }) => <Text>Cart</Text>,
        }}
      />
      <Tabs.Screen
        name="form"
        options={{
          title: "Login",
          headerShown: false,
          tabBarIcon: ({ focused }) => <Text>Form</Text>,
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
