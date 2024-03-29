import { StyleSheet, Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../store/auth-context";

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState("");
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  useEffect(() => {
    axios
      .get(
        `https://react-native-course-c43e1-default-rtdb.firebaseio.com/message.json?auth=${token}`,
      )
      .then((response) => {
        setFetchedMessage(response.data);
      });
  }, []);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
