import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "auto",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
 
 
  titulo: {
    fontSize: 32, // Ajuste o tamanho do conquistador aqui
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  tit: {
    fontSize: 40, // Ajuste o tamanho do conquistador aqui
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
    marginTop:20,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "italic",
    marginBottom: 10,
  },
  conquistador:{
    width: 300,
    height: 300,
    marginBottom: 20,

  },
  containerIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  icons: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    backgroundColor:"white"
  },
  icon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
});

export default styles;