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
          <Text style={{ fontSize: 22, fontWeight: "bold" ,color:"#27214D"}}>
            🛍️ Shop Items
          </Text>
          <View
            style={{
              marginVertical: 10,
              flexDirection: "row",
              // justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </View>
        </ScrollView>

        {/* <Button title="Add to Cart" onPress={() => addToCart(product)} /> */}
        {/* <View style={{ marginTop: 30 }}>
        <Cart />
      </View> */}
      </View>
    </Layout>
  );
};

export default ProductScreen;
const products = [
  { id: "1", name: "Cotton Saree", price: 1200 },
  { id: "2", name: "Handmade Bag", price: 800 },
  { id: "3", name: "Organic Soap", price: 150 },
  { id: "4", name: "Organic Soap", price: 150 },
  { id: "5", name: "Organic Soap", price: 150 },
  { id: "6", name: "Organic Soap", price: 150 },
  { id: "7", name: "Organic Soap", price: 150 },
  { id: "8", name: "Organic Soap", price: 150 },
  { id: "9", name: "Organic Soap", price: 150 },
  { id: "10", name: "Organic Soap", price: 150 },
  { id: "11", name: "Organic Soap", price: 150 },
  { id: "12", name: "Organic Soap", price: 150 },
];
