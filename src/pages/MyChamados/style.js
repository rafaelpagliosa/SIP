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
    marginTop: "5%"
  },
  map: {
    justifyContent: "center",
    position: "absolute",
    right: "5%",
    marginTop: "2%"
  },
  DescriptionTask: {
    width: "80%",
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