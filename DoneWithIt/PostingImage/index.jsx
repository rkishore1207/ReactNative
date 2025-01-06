import { useState } from "react";
import {
  Button,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const Index = () => {
  const [images, setImages] = useState([]);

  const handleImageClick = async () => {
    const selectedImage = await ImagePicker.launchImageLibraryAsync();
    selectedImage.canceled
      ? console.log("Clicked Cancel")
      : setImages([...images, selectedImage.assets[0].uri]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imagesContainer}>
        {images.map((image, index) => {
          return (
            <Image
              key={index}
              source={{ uri: image }}
              style={styles.containerImage}
            />
          );
        })}
        <View>
          <Button title="Image" onPress={handleImageClick} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  imagesContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  containerImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
