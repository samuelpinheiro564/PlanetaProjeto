

import { Text, TouchableOpacity, View,ImageBackground,ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import PlanetsRepository from "../../models/PlanetRepository";

export default function Descricao({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;

  const editPlanet = () => {
    navigation.navigate("CriarPlanetas", { planet: data, edit: true });

  };

  const deletePlanet = () => {
    PlanetsRepository.removePlanets(data.id);
    navigation.navigate("ListPlanets");
  };

  return (
    <ScrollView>
    <View style={styles.container}>
     

      {data ? (
        <Text style={styles.tit}>Detalhes do Planeta</Text>
      ) : (
        <Text  style={styles.tit}>Selecione um Planeta para exibir seus detalhes</Text>
      )}

     
          <Text  style={styles.tit}>{data.nome}</Text>
          <View style={styles.linha}></View>
          <Text  style={styles.text}>{data.data}</Text>
          <View style={styles.linha}></View>
          <Text  style={styles.text}>{data.cor1}</Text>
          <View style={styles.linha}></View>
          <Text  style={styles.text}>{data.cor2}</Text>
          <View style={styles.linha}></View>
          <Text  style={styles.text}>{data.loc}</Text>
          <View style={styles.linha}></View>
          <Text  style={styles.text}>{data.populacao}</Text>
          <View style={styles.linha}></View>
          <Text  style={styles.text}>{data.nome_gov}</Text>
          <View style={styles.linha}></View>
          <Text  style={styles.text}>{data.titulo_gov}</Text>
          <View style={styles.linha}></View>

        </View>

        <View style={styles.help}>
          <TouchableOpacity style={styles.botton} onPress={editPlanet}>
            <Text   style={styles.textbotton}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={deletePlanet}>
            <Text    style={styles.textbotton}>Excluir</Text>
          </TouchableOpacity>
        </View>
    
        </ScrollView>
  );
}