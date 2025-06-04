import { Button, Image, StyleSheet, Text, View } from "react-native";
const bgImage = require("../assets/bg.png");
const ProductDetail = () => {
  return (
    <View>
      <View style={styles.imageView}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1745253606009-9f01a3404db5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
      </View>

      <View style={styles.blurView}>
        <Text style={styles.cardTitle}>product.name</Text>
        <Text style={styles.cardText}>product.price</Text>
      </View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default ProductDetail;
const styles = StyleSheet.create({
  container: {
    width: "48%",
    marginBottom: 12,
    marginHorizontal: "1%",
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },

  logo: {
    width: 50,
    height: 50,
    // objectFit: "cover",
  },
  blurView: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
  },
  imageView: {
    height: 300,
    backgroundColor: "red",
    padding: 10,
  },
});
