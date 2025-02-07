import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import { useState } from "react";
import GoalItem from "@/components/goal/GoalItem";
import GoalInput from "@/components/goal/GoalInput";

export default function HomeScreen() {
  const [goal, setGoal] = useState<string>("");
  const [goalList, setGoalList] = useState<any>([]);

  const handleGoalChange = (event: any) => {
    setGoal(event);
  };

  const handleAddGoalClick = () => {
    setGoalList((prevGoal: any) => [
      ...prevGoal,
      { text: goal, id: Math.random().toString() },
    ]);
    //setGoal("");
  };

  return (
    <SafeAreaView style={styles.indexBody}>
      <GoalInput
        onPressGoal={handleAddGoalClick}
        onChangeGoal={handleGoalChange}
        goalText={goal}
      />
      <FlatList
        data={goalList}
        renderItem={(goal) => {
          return <GoalItem text={goal.item.text} />;
        }}
        keyExtractor={(item) => {
          return item.id;
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  indexBody: {
    marginBottom: 30,
  },
});
