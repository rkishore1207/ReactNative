import { useEffect, useState } from "react";
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
import * as ImagePicker from "expo-image-picker";

export default function App() {
  const [imageUrl, setImageUrl] = useState(null);

  const selectImage = async () => {
    const permission = await ImagePicker.launchImageLibraryAsync();
    if (permission.canceled) {
      alert("You have to give the permission to access");
    } else {
      setImageUrl(permission.assets[0].uri);
    }
  };

  return (
    <SafeAreaView>
      <Button title="Click Here" onPress={selectImage} />
      <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />
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
