import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: 700,
    textAlign: "center",
    padding: 10,
  },
  productCard: {
    backgroundColor: "#fff",
    marginTop: 10,
    marginRight: 10,
    flex: 1,
    justifyContent: "center",
    borderRadius: 5,
  },
  textStyle: {
    marginTop: 5,
    color: "black",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: 15,
    fontWeight: 700,
  },
  productImg: {
    height: 200,
    width: 290,
    borderRadius: 5,
  },
  AddCardButton: {
    paddingHorizontal: 10,
    textAlign: "center",
  },
});

export default styles;
