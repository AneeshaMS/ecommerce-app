import { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CartContext } from "../context/CartContext";
const CartCard = ({ item }) => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotal } =
    useContext(CartContext);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          gap: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            padding: 10,
            width: 75,
            // height: 75,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={require("../assets/bg.png")} style={styles.image} />
        </View>
        <View>
          <Text style={{ color: "#27214D", fontSize: 18, fontWeight: "bold" }}>
            {item.name}
          </Text>
          <Text style={{ color: "gray", fontSize: 16 }}>Men's Shoe</Text>
          <Text style={{ color: "#F08626", fontSize: 18, fontWeight: "bold" }}>
            {item.price}
          </Text>
        </View>
      </View>
      <View style={styles.icon}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            updateQuantity(item.id, 1);
          }}
        >
          <Text style={{ fontSize: 18, color: "#F08626", marginTop: -5 }}>
            +
          </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 16, marginTop: -5, textAlign: "center" }}>
          {item.quantity}
        </Text>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            updateQuantity(item.id, -1);
          }}
        >
          <Text style={{ fontSize: 18, color: "#F08626", marginTop: -5 }}>
            -
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    elevation: 10,
    backgroundColor: "#FFFAEB",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#F08626",
    borderStyle: "solid",
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  icon: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 30,
    justifyContent: "space-between",
    gap: 10,
    borderColor: "#F08626",
    borderWidth: 1,
    borderStyle: "solid",
  },
  iconButton: {
    fontSize: 20,
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: "#FFF2E7",
    alignItems: "center",
    justifyContent: "center",
  },
});
