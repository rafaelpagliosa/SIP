import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingTop: 20
  },
  Tasks: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "5%",
    backgroundColor: "#f2ae1b",
    borderRadius: 50,
    height: 100,
  },
  chamados: {
    color: "#2506DE",
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "5%",
    marginTop: "1%",
    marginBottom: "1%",
  },
  map: {
    justifyContent: "center",
    position: "absolute",
    right: "5%",
    marginTop: "2%"
  },
  DescriptionTask: {
    width: "70%",
    alignContent: "flex-start",
    backgroundColor: "#f2ae1b",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginBottom: 5,
    marginLeft: "2%",
    color: "#50555C",
  },
  iconButton: {
    color: "#ffffff",
    fontSize: 10,
    fontWeight: "bold",
  },
  linha: {
  },
});

export default styles