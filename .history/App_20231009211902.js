import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Order from "./components/Order";
import OrderDetail from "./components/OrderDetail";

export default function App() {
  const Stack = createNativeStackNavigator();
  const config = {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 50,
      mass: 3,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  const closeConfig = {
    animation: "timing",
    config: {
      duration: 200,
      easing: Easing.linear,
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Details" component={OrderDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
