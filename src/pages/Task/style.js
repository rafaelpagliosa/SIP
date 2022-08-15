import { StyleSheet } from 'react-native'
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

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
    marginTop: 5
  },
  deleteTask: {
    justifyContent: "center",
    paddingLeft: 15,
  },
  DescriptionTask: {
    width: "80%",
    alignContent: "flex-start",
    backgroundColor: "#f5f5f5cf",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginBottom: 5,
    marginRight: "10%",
    color: "#9450f2",
  },
  buttonNewTask: {
    width: "60%",
    height: "30%",
    position: "absolute",
    bottom: 30,
    top: "20%",
    backgroundColor: "#2506DE",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    left: "20%"
  },
  buttonMeusChamados: {
    width: "60%",
    height: "30%",
    position: "absolute",
    bottom: 30,
    top: "53%",
    backgroundColor: "#2506DE",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    left: "20%"
  },
  iconButton: {
    color: "#f2ae1b",
    fontSize: 25,
    fontWeight: "bold",
  },
  buttonLogout: {
    width: 60,
    height: 80,
    position: "absolute",
    bottom: 30,
    left: "75%",
    right: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-9%",
    backgroundColor: "#2506DE",
    borderRadius: 10,
    padding: 2,
  },
  iconButtonLogout: {
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "bold",
  },
  buttonPeople: {
    width: 60,
    height: 80,
    position: "absolute",
    bottom: 30,
    left: "10%",
    right: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-9%",
    backgroundColor: "#2506DE",
    borderRadius: 10,
    padding: 2,
  },
  iconButtonPeople: {
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "bold",
  },
  linha: {
    borderColor: "#2506DE",
    borderStyle: "solid",
    borderBottomWidth: 5,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    top: "70%",
  },
  title: {
    fontSize: 65,
    color: "#2506DE",
    marginBottom: "-4%",
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5%",
  },
  subTitle: {
    fontSize: 15,
    color: "#2506DE",
    marginBottom: 5,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default styles