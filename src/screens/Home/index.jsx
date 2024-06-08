import React from "react";
import { View, ImageBackground, Text } from "react-native";
import styles from "./styles";
import TouchBotton from "../../components/TouchBotton";

export default function Home() {
  return (
    
      <ImageBackground
        source={require("../../../assets/lua2.jpeg")}
        style={styles.background}
      >
        <View style={styles.container}>
          <Text style={styles.tit} >Seja Bem-vindo Conquistador</Text> 
          <TouchBotton route="ListaPLanetas" title="Lista de Planetas" />
          <View style={styles.linha}></View>
          <TouchBotton route="Conquistador" title="Conquistador" />
          <View style={styles.linha}></View>
          <TouchBotton route="CriarPlanetas" title="Criar Planetas" />
          <View style={styles.linha}></View>
        </View>
      </ImageBackground>
    
  );
}