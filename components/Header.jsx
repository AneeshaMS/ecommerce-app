import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Header = ({ title, canGoBack = true }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        flexDirection: "row",
        width: "100%",
      }}
    >
      {canGoBack && (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          title="Back"
          style={styles.button}
        >
          <Icon name="angle-left" color={"#F08626"} size={24} />
        </TouchableOpacity>
      )}
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          color: "#27214D",
          textAlign: "center",
          flex: 1,
          widthth: "100%",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  button: {
    // backgroundColor: "#FACC15",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    // width: 100,
  },
});
