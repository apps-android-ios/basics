import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";

// import ProductList from "./src/screens/product-list";
// import Cards from "./src/screens/cards";
import Contact from "./src/screens/contact";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Contact />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
