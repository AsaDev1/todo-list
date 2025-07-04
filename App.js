import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [listOfGoals, setlistOfGoals] = useState([]);
  const [modalIsVisible, setModalisVisible] = useState(false);

  function openModalHandler() {
    setModalisVisible(true);
  }

  function closeModalHandler() {
    setModalisVisible(false);
  }

  const addGoalHandler = (enteredGoalText) => {
    setlistOfGoals((currentlistOfGoals) => [
      ...currentlistOfGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    closeModalHandler();
  };

  const deleteGoalItem = (id) => {
    setlistOfGoals((currentlistOfGoals) => {
      return currentlistOfGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          onPress={openModalHandler}
          onClose={closeModalHandler}
          color="#a065ec"
        />
        <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} />
        <View style={styles.goalList}>
          <FlatList
            data={listOfGoals}
            renderItem={(item) => {
              return (
                <GoalItem
                  item={item.item}
                  id={item.item.id}
                  onDeleteItem={deleteGoalItem}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },

  goalList: {
    flex: 5,
  },
});
