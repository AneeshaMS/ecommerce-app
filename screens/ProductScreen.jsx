import { useContext } from "react";
import { ScrollView, Text, View } from "react-native";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";
const ProductScreen = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <Layout>
      <View style={{ padding: 20 }}>
        <ScrollView>
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "#27214D" }}>
            🛍️ Shop Items
          </Text>
          <View
            style={{
              marginVertical: 10,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default ProductScreen;
const products = [
  { id: "1", name: "Cotton Saree", price: 1200 },
  { id: "2", name: "Handmade Bag", price: 800 },
  { id: "3", name: "Organic Soap", price: 150 },
  { id: "4", name: "VelvetGlow Hoodie", price: 150 },
  { id: "5", name: "SilkAura Scarf", price: 150 },
  { id: "6", name: "EcoThread Denim", price: 150 },
  { id: "7", name: "CraftNest Tote", price: 150 },
  { id: "8", name: "LunaLoom Shawl", price: 150 },
  { id: "9", name: "RusticRoot Basket", price: 150 },
  { id: "10", name: "PureEssence Soap", price: 150 },
  { id: "11", name: "ZenBloom Candle", price: 150 },
  { id: "12", name: "HoneyDew Lip Balm", price: 150 },
];
