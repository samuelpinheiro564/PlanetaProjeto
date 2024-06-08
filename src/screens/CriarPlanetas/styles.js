import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  tit: {
    color: "white",
    fontSize: 45,
    fontWeight: "bold",
    marginBottom: 30, // Ajuste o marginTop para aumentar a distância entre o título e os inputs
    textAlign: "center",
    textShadowColor: 'black',
    textShadowOffset: { width: -3, height: -3 },
    textShadowRadius: 2,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "italic",
    marginBottom: 10,
    color:"white",
    textShadowColor: 'black', 
    textShadowOffset: { width: -3, height: -1 }, 
    textShadowRadius: 5, 
  },
  textbotton: {
    color:"white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:20,  
    textShadowColor: 'black', 
    textShadowOffset: { width: -3, height: -3 }, 
    textShadowRadius: 5, 

  },
  
    inputes: {
      color: "white",
      width: '70%', // Definir a largura do input para corresponder à largura da linha
      fontSize: 20,
      textShadowColor: 'black',
      textShadowOffset: { width: -3, height: -1 },
      textShadowRadius: 2,
      textAlign: 'center', // Centralizar o texto inserido
      placeholderTextColor: 'white', // Cor do placeholder
    },
  linha: {
    height: 3, 
    width: '70%',  
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'white', 
  },
  dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },

          dateInput: {
            marginLeft: 36
          }
});
export default styles;