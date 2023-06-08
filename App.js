import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import ProductList from "./src/screens/product-list";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ProductList />
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
