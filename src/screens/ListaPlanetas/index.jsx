import styles from "./styles";
import planetsRepository from "../../models/Planet/PlanetRepository";
import { useEffect, useState } from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { Text, View, TouchableOpacity,ImageBackground,ScrollView } from "react-native";


export default function Planetas() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [todosUsuarios, setTodosUsuarios] = useState([]);

  useEffect(() => {
    if (isFocused) {
      const planets = planetsRepository.getAllPlanets();
      setTodosUsuarios(planets);
    }
  }, [isFocused]);

  return (
    <ScrollView>
    <ImageBackground source={require("../../../assets/lua.jpeg")} style={styles.background}>
      
    <View style={styles.container}>
      <Text  style={styles.tit}>Planetas Conquistados:</Text>

      {todosUsuarios.length > 0 ? (
        <View style={styles.help} >
          {todosUsuarios.map((planet) => (
            <View style={styles.help1} key={planet.id} >
              <View >
                <Text style={styles.text}>{planet.nome}</Text>
                <View style={styles.linha}></View>
                <Text style={styles.text}>{planet.data}</Text>
                <View style={styles.linha}></View>
                <Text style={styles.text}>{planet.populacao}</Text>
                <View style={styles.linha}></View>
                <Text style={styles.text}>{planet.loc}</Text>
                <View style={styles.linha}></View>
              </View>

              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Descricao", { data: planet })}
                >
                  <Text style={styles.textbotton}>Detalhes</Text>
                </TouchableOpacity>
                
              </View>
            </View>
          ))}
        </View>
        
      
      ) : (
        
        <Text style={styles.tit}>Nenhum planeta cadastrado</Text>
      
      )}
    </View>
   
    </ImageBackground>
    </ScrollView>
  );
}