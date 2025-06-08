import { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CartContext } from "../context/CartContext";
const CartCard = ({ item }) => {
  const { updateQuantity } = useContext(CartContext);
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
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={{ color: "#27214D", fontSize: 18, fontWeight: "bold" }}>
            {item.name}
          </Text>
          <Text style={{ color: "gray", fontSize: 16 }}>Men's Shoe</Text>
          <Text style={{ color: "#F08626", fontSize: 18, fontWeight: "bold" }}>
            $ {item.price}
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
    elevation: 3,
    backgroundColor: "#FFFAEB",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#F08626",
    borderStyle: "solid",
    marginBottom: 10,
    width: 350,
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
