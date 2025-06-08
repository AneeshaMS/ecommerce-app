import { useRouter } from "expo-router";
import { useContext } from "react";
import { Button, FlatList, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CartCard from "../components/CartCard";
import Layout from "../components/Layout";
import { CartContext } from "../context/CartContext";

const CartScreen = () => {
  const { cartItems, clearCart, getTotal } = useContext(CartContext);
  const router = useRouter();
  console.log("first", cartItems);
  return (
    <Layout>
      <View
        style={{
          marginTop: 20,
          padding: 20,
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <View style={{ gap: 10 }}>
          <Text
            style={{ fontSize: 22, fontWeight: "bold", color: "#27214D" }}
            onPress={() => router.push("/")}
          >
            🧾 Your Cart
          </Text>
          {cartItems.length === 0 ? (
            <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
              <Icon name="cart-outline" size={40} color="gray" />

              <Text style={{ textAlign: "center", fontSize: 18 }}>
                Your cart is empty 🥲
              </Text>
            </View>
          ) : (
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
              data={cartItems}
              keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CartCard item={item} />}
                ItemSeparatorComponent={() => <View style={{margin:10} } />}
            />
          )}
        </View>

        {cartItems.length > 0 && (
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18 }}>Total: ₹{getTotal()}</Text>
            <Button
              title="Clear Cart"
              color="#F08626"
              onPress={clearCart}
              style={{ borderRadius: 10 }}
            />
          </View>
        )}
      </View>
    </Layout>
  );
};

export default CartScreen;
