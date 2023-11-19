import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    fontSize: 28,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
  inputText: {
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    fontSize: 18,
  },
  surveyContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eee",
  },
  selectables: {
    marginTop: 5,
    marginBottom: 5,
    padding: 8,
    textAlign: "center",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  selectedText: {
    marginTop: 5,
    marginBottom: 5,
    padding: 8,
    textAlign: "center",
    fontSize: 16,
    fontStyle: "italic",
    backgroundColor: "#D9D9D9",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  button: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: "#00A896",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default styles;
