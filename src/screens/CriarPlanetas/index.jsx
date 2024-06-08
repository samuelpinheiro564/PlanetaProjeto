import { Text, View,TouchableOpacity,TextInput,ImageBackground,Picker,ScrollView } from "react-native";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";
import { useState, useEffect } from "react";
import planetsRepository from "../../models/PlanetRepository";
import Planet from "../../models/Planet";


export default function CriarPlanetas({ route }) {
  let {planet,edit} = route.params;

  const[nome,setNome]=useState("");
  const[data,setData]=useState("");
  const[cor1,setCor1]=useState("");
  const[cor2,setCor2]=useState("");
  const[populacao,setPopulacao]=useState("");
  const[galaxia,setGalaxia]=useState("");
  const[ss,setSs]=useState("");
  const[coordenadas,setCoordenadas]=useState("");
  const[nome_gov,setNome_gov]=useState("");
  const[titulo_gov,setTitulo_gov]=useState("");

  const[atualizar,setAtualizar]=useState(edit);

  const navigation = useNavigation();

  useEffect(()=>{
if(edit){
  setNome(planet.nome);
  setData(planet.data);
  setCor1(planet.cor1);
  setCor2(planet.cor2);
  setPopulacao(planet.populacao);
  setGalaxia(planet.galaxia);
  setSs(planet.ss);
  setCoordenadas(planet.coordenadas);
  setNome_gov(planet.nome_gov);
  setTitulo_gov(planet.titulo_gov);
setAtualizar(true);
}else{
  ClearInputs();
}
  },[planet,edit]);

  const UserAction = () =>{
  
    if(edit){
      planetsRepository.updatePlanet(planet.id,nome,data,cor1,cor2,populacao,galaxia,ss,coordenadas,nome_gov,titulo_gov);
      ClearInputs();
         navigation.navigate('ListPlanets');
    }
    else{
       if(edit= false && nome != "" || data != "" || cor1 != "" || cor2 != "" || populacao != "" || loc != "" || nome_gov != "" || titulo_gov != ""){
       const newPlanet = new Planet(nome,data,cor1,cor2,populacao,galaxia,ss,coordenadas,nome_gov,titulo_gov);
       planetsRepository.addPlanet(newPlanet);
       ClearInputs();
       navigation.navigate('ListPlanets');
       
     }else{
       alert("Preencha todos os campos");
       ClearInputs();
     }

        navigation.navigate('ListPlanets');
   }

  };
  const ClearInputs = () => {
    setAtualizar(false);
    edit = false;
    setNome("");
    setData("");
    setCor1("");
    setCor2("");
    setPopulacao("");
    setGalaxia("");
    setSs("");
    setCoordenadas("");
    setNome_gov("");
    setTitulo_gov("");
  };

  return (
    <ScrollView>
    
    <View style={styles.container}>
      <Text style={styles.tit} >{atualizar ?"editar Planeta" : "Criar Planeta"}</Text>

<TextInput 
style={styles.inputes}
placeholder='digite o nome do planeta'
onChangeText={setNome}
value={nome}
/>

<TextInput 
style={styles.inputes}
placeholder='digite a data da conquista'
onChangeText={setData}
value={data}
/>
<View style={styles.linha}></View>
<TextInput 
style={styles.inputes}
placeholder='digite a Cor1'
onChangeText={setCor1}
value={cor1}
/>
<View style={styles.linha}></View>
<TextInput 
style={styles.inputes}
placeholder='digite a Cor2'
onChangeText={setCor2}
value={cor2}
/>
<View style={styles.linha}></View>
<TextInput 
style={styles.inputes}
placeholder='digite o número de habitantes do planeta'
onChangeText={setPopulacao}
value={populacao}
keyboardType="numeric"
/>
<View style={styles.linha}></View>
<TextInput 
style={styles.inputes}
placeholder='digite as coordenadas espaciais do planeta'
onChangeText={setCoordenadas}
value={coordenadas}
keyboardType="numeric"
/>
<View style={styles.linha}></View>
<TextInput 
style={styles.inputes}
placeholder='digite o sistema solar do planeta'
onChangeText={setSs}
value={ss}
/>
<View style={styles.linha}></View>
<TextInput 
style={styles.inputes}
placeholder='digite a galaxia do planeta'
onChangeText={setGalaxia}
value={galaxia}
keyboardType="numeric"
/>
<View style={styles.linha}></View>
<TextInput 
style={styles.inputes}
placeholder='digite o nome do governante do planeta'
onChangeText={setNome_gov}
value={nome_gov}
/>
<View style={styles.linha}></View>
<TextInput 
style={styles.inputes}
placeholder='digite o titulo do governante do planeta'
onChangeText={setTitulo_gov}
value={titulo_gov}
/>
<View style={styles.linha}></View>

<TouchableOpacity style={styles.botton} onPress={UserAction}>
        <Text style={styles.textbotton} >{atualizar ? "Salvar Alterações" : "Criar Planeta"}</Text>
      </TouchableOpacity>
      

      {atualizar && (
        <TouchableOpacity style={styles.botton}  onPress={ClearInputs}>
          <Text style={styles.textbotton} >Cancelar Edição</Text>
        </TouchableOpacity>
      )}
   
    </View>
  
    </ScrollView>
  );
}