# ReactNative

## Basics for React Native

- To install Expo cli to our system -> `npm install -g expo-cli`
- Needed Extensions -> React Tools and React/Snippet
- To create Native apps -> expo init <App Name>

> In React Native we are not using the default HTML Tags instead, we are following the **pre-defined components** that are given by React itself.

- These components are **cross-platforms**, it would adapt itself to android and iphone.
- `View` is like div, used for **grouping**
- But IPhone has **Notch** on the top, so if we are using View, then the contents are hidden by that notch. So if we want to display the contents below the notch, we could use `SafeAreaView`.
- Image - `require()` method helps to detect the local image from the files and it **adds extra size** for our bundle.
- To access the **remote image**, we have to use object in the source attribute with `uri` parameter.
- But React Native doesn't recognize that image, we have to explicitly specify the **width and height**.
- Image is not touchable, we have to wrap the image in a separate container called `Touchable`(hightlight,opacity,withoutfeedback).

```javascript
<Button
  title="Click Here"
  onPress={() =>
    Alert.alert("Custom Heading", "Custom Message", [
      { text: "OK", onPress: () => console.log("OK") },
      { text: "Cancel", onPress: () => console.log("Cancel") },
    ])
  }
/>

<Image source={{uri:"link"}} style={{width:100,height:100}}/>
```

- For alert we can customize the pre defined alert pop up with our own wish. There is **Alert.prompt()** method also there to get the question and give back the answer
- But until now this feature is not applicable for Android.
- Alert and StyleSheet are `APIs`.
- We could pass **object** to the style attribute.
- We can pass multiple properties to the style attribute as `Array`, and the **right side value** would override the left side values.
- `paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0` -> to get the current device Operating System.
