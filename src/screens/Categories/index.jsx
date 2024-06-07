import { View, TouchableOpacity } from "react-native";
import React from "react";
import Title from "../../components/Title";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";


export default function Categories() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Title title="Categories" />
    </View>
  );
};
