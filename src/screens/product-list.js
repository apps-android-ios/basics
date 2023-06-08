import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";

import { productListDetails } from "../data";
import styles from "../styles/product-list.styles";

export default ProductList = () => {
  return (
    <View>
      <Text style={styles.heading}>Product List</Text>
      <FlatList
        keyExtractor={(index) => {
          return index.id;
        }}
        inverted
        horizontal
        showsHorizontalScrollIndicator={false}
        data={productListDetails}
        renderItem={(element) => {
          return (
            <ScrollView>
              <ProductItem name={element.item.name} img={element.item.image} />
            </ScrollView>
          );
        }}
      />
    </View>
  );
};

function ProductItem({ name, img }) {
  return (
    <View style={styles.productCard}>
      <TouchableOpacity>
        <Image source={img} style={styles.productImg} alt={name} />
      </TouchableOpacity>
      <Text style={styles.textStyle}>{name}</Text>
      <Button
        title="Buy Now"
        onPress={() => Alert.alert(`${name}`)}
        color="#841584"
      />
    </View>
  );
}
