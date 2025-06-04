import { useContext, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [liked, setLiked] = useState(false);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => setLiked(!liked)}>
          <Icon
            name={liked ? "heart" : "heart-outline"}
            size={24}
            color="#F08626"
          />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.logo}
        source={{
          uri: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      />
      <Text style={styles.cardTitle}>{product.name}</Text>
      <View
        intensity={40}
        tint="dark"
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.cardText}>${product.price}</Text>

        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => {
            addToCart(product);
          }}
        >
          <Icon name="cart-outline" size={28} color="#F08626" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
const styles = StyleSheet.create({
  container: {
    width: "48%",
    marginBottom: 12,
    marginHorizontal: "1%",
    backgroundColor: "#FFFDF6",
    borderRadius: 10,
    overflow: "hidden",
    padding: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#FFF2E7",
  },

  logo: {
    width: "100%",
    height: 150,
    objectFit: "cover",
    borderRadius: 10,
  },
  textCard: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#27214D",
  },
  cardText: {
    fontSize: 14,
    color: "#F08626",
  },
  cartButton: {
    fontSize: 20,
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#FFF2E7",
    alignItems: "center",
    justifyContent: "center",
  },
});
