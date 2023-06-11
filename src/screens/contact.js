import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from "react-native";
import { useState, useRef, useCallback } from "react";
import Checkbox from "expo-checkbox";

let initialState = false;

export default Contact = ({ navigation }) => {
  const [agree, setAgree] = useState(initialState);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleCheckBox = useCallback(() => {
    setAgree(!agree);
  }, [agree]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login Form</Text>
      <Text style={styles.description}>You can reach use anytime</Text>
      <View style={styles.inputArea}>
        <Text style={styles.label}>Enter your name</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={userName}
          onChangeText={setUserName}
        />
        <Text style={styles.label}>Enter your password</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.wrapper}>
          <Checkbox
            value={agree}
            onValueChange={handleCheckBox}
            color={agree ? "#4630EB" : null}
          />
          <Text style={styles.wapperText}>
            I have read and agree with the TC
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: agree ? "#4630EB" : "gray",
            },
          ]}
          disabled={!agree}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: 600,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
  inputArea: {
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 5,
    fontSize: 18,
    width: 250,
  },
  button: {
    marginTop: 30,
    backgroundColor: "blue",
    paddingVertical: 10,
    borderRadius: 4,
  },
  textButton: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    fontWeight: 700,
    textTransform: "uppercase",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
  },
  wapperText: {
    color: "rgba(0,0,0,0.7)",
  },
});
