import {
  Alert,
  Button,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <Button title="Click Here" onPress={() => alert("Custom Message")} />
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  buttonStyle: {
    // backgroundColor: "red",
    cursor: "pointer",
    borderRadius: "10px",
  },
});
