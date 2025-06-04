import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import Header from "./components/Header";
import { CartProvider } from "./context/CartContext";
import CartScreen from "./screens/CartScreen";
import ProductScreen from "./screens/ProductScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <TabScreens />
      </NavigationContainer>
    </CartProvider>
  );
}
const TabScreens = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Products") {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name === "Cart") {
          iconName = focused ? "cart" : "cart-outline";
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "#F08626",
      tabBarInactiveTintColor: "gray",
    })}
  >
    <Tab.Screen
      name="Products"
      component={ProductScreen}
      options={{
        headerTitle: () => (
          <Header title="My Ecommerce App" canGoBack={false} />
        ),
        headerStyle: {
          backgroundColor: "white",
        },
      }}
    />
    <Tab.Screen
      name="Cart"
      component={CartScreen}
      options={{
        headerTitle: () => <Header title="My Cart" />,

        headerStyle: {
          backgroundColor: "White",
        },
      }}
    />
  </Tab.Navigator>
);
