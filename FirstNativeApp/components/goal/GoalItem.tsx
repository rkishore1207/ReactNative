import { StyleSheet, Text, View } from "react-native";

type GoalItemProps = {
  text: string;
};

const GoalItem = ({ text }: GoalItemProps) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalItemText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "green",
    borderRadius: 5,
  },
  goalItemText: {
    color: "white",
  },
});

export default GoalItem;
