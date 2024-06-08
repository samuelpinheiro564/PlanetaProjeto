
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",

  },
 
  textbotton: {
    color:"white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:20,  
    textShadowColor: 'black', 
    textShadowOffset: { width: -3, height: -3 }, 
    textShadowRadius: 5, 

  },  tit: {
    fontSize: 40, // Ajuste o tamanho do conquistador aqui
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
    marginTop:20,
    textShadowColor: 'black', 
    textShadowOffset: { width: -3, height: -3 }, 
    textShadowRadius: 5, 
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
  
   
  linha: {
    height: 3, 
    width: '100%',  
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'white', 
  },
 
});
export default styles;