import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { buscarCaes } from "./util/http";

export default function App() {
  useEffect(() => {
    async function obterCaes() {
      const caes = await buscarCaes();

      console.log(caes);
    }

    obterCaes();
  });

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
