import {
  Button,
  Platform,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

type GoalInputProps = {
  goalText: string;
  onPressGoal: () => void;
  onChangeGoal: (value: string) => void;
};

const GoalInput = ({ goalText, onPressGoal, onChangeGoal }: GoalInputProps) => {
  return (
    <View style={styles.headerContainer}>
      <TextInput
        placeholder="Enter your Goal"
        onChangeText={onChangeGoal}
        value={goalText}
        style={styles.inputText}
      />
      <Button title="Add Goal" onPress={onPressGoal} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    paddingTop:
      Platform.OS === "android"
        ? StatusBar.currentHeight && StatusBar.currentHeight + 20
        : 0,
    gap: 20,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  inputText: {
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 10,
    width: 280,
  },
});

export default GoalInput;
