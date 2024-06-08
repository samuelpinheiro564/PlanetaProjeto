
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
    height: "100%"

  },
   botton: {
    padding: 10,
    borderRadius: 10,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  help: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },  
  botton: {
    marginRight: 100,
  },
  textbotton: {
    color:"white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:20,  

  },  tit: {
    fontSize: 43, // Ajuste o tamanho do conquistador aqui
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
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
    color:"white",
    textShadowColor: 'black', 
    textShadowOffset: { width: -3, height: -3}, 
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