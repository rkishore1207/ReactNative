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
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Index = () => {
  const [images, setImages] = useState([]);

  const checkIfAlreadyPresent = (selectedImage) => {
    return images.some((image) => image.fileName === selectedImage.fileName);
  };

  const handleIconClick = async () => {
    let selectedImage = await ImagePicker.launchImageLibraryAsync();
    const isPresent = checkIfAlreadyPresent(selectedImage.assets[0]);
    if (isPresent) {
      alert("This image is already Present");
    } else {
      selectedImage.canceled
        ? console.log("Clicked Cancel")
        : setImages([...images, selectedImage.assets[0]]);
    }
  };

  const handleImageClick = (index) => {
    const updatedImages = images.filter(
      (image) => images.indexOf(image) !== index
    );
    setImages(updatedImages);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imagesContainer}>
        {images.map((image, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleImageClick(index)}
            >
              <Image
                source={{ uri: image.uri }}
                style={styles.containerImage}
              />
            </TouchableOpacity>
          );
        })}
        <View>
          <Icon
            name="camera-plus-outline"
            size={50}
            style={styles.imageIcon}
            onPress={handleIconClick}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 0,
  },
  imagesContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  imageIcon: {
    cursor: "pointer",
  },
  containerImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
