import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const bgImage = require("../assets/bg.png");

const Layout = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <LinearGradient colors={["#FFFDEB", "#FCE5CD80"]} style={{ flex: 1 }}> */}
      <ScrollView>{children}</ScrollView>
      {/* </LinearGradient> */}
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", overflow: "hidden" },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
