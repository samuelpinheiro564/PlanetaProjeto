import styles from "./styles";
import { View, Text } from "react-native";
import React from "react";

const Title = ({ title }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Title