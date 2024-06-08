import { View, ImageBackground, Text, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function Conquistador() {
  const navigation = useNavigation();
  return (
    <ScrollView>
       
    
  

           <View style={styles.container}>
             
          <Text style={styles.tit} >Gabriel Picirili</Text>

          <Image
          style={styles.conquistador}
          source={require("../../../assets/conquistador2.webp")}
          />
          <View style={styles.containerIcons}>
            <Image
              style={styles.icons}
              source={require("../../../assets/html.png")}
            />
            <Image
              style={styles.icons}
              source={require("../../../assets/css-3.png")}
            />
            <Image
              style={styles.icons}
              source={require("../../../assets/nodejs.png")}
            />
            <Image
              style={styles.icons}
              source={require("../../../assets/react.png")}
            />
            <Image
              style={styles.icons}
              source={require("../../../assets/js.png")}
            />
            <Image
              style={styles.icons}
              source={require("../../../assets/canva.png")}
            />
            <Image
              style={styles.icons}
              source={require("../../../assets/excel.png")}
            />
          </View>
      
          
          
          <Text style={styles.text}>
            Atualmente sou um estudante do Novo Ensino Medio onde estudamos
            tanto no Sesi quanto no Senai com o ensino tecnico.
          </Text>

          <Text style={styles.titulo} >Objetivo</Text>

          <Text style={styles.text}>
            Desenvolver minhas habilidades e conhecimentos na area de
            TI, e me tornar um profissional de sucesso.
          </Text>
          <Text style={styles.titulo}>Habilidades</Text>

          <Text style={styles.text}>
             Boa comunicação, trabalho em
            equipe, organização e responsabilidade.
          </Text>
          <Text style={styles.titulo} >Formação</Text>
          <Text style={styles.text}> Ensino Medio - Andamento</Text>
          <Text style={styles.text}> Desenvolvimento de Sistemas - andamento</Text>
          </View>

         </ScrollView>

  );
}