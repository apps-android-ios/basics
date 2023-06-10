import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";

import ProductList from "./src/screens/product-list";
import Cards from "./src/screens/cards";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ProductList />
        <Cards />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: StatusBar.currentHeight || 0,
  },
});
