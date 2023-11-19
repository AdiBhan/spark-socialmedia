import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20,
    color: "#333",
    textAlign: "center",
  },
  subheader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 20,
    color: "#555",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  button_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    marginHorizontal: 5,
    borderRadius: 50,
    backgroundColor: "rgb(75, 165, 150)",
  },
  buttonText: {
    color: 'white', // Set your desired color
    textAlign: 'center', // Center the text
    padding: 12
  },
  button: {
    backgroundColor: "#e0e0e0",
    width: "50%",
    paddingVertical: 12,
    borderRadius: 25,
    shadowColor: "#aaa",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 4,
  },
});

export default styles;
