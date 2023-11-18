import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  subheader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
  },

  button_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginHorizontal: 5,
    borderRadius: 50,
  },
  button: {
    borderRadius: 50,
    borderColor: "#000",
    borderWidth: 3,
  },
});
export default styles;
