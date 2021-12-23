import { StyleSheet, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

  container: {
    height: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingTop: "5%",
    marginTop: "8%",
    backgroundColor: "#fff",
  },
  header: {
    color: "#525257", 
    marginBottom:10,
    fontSize: 20,
    fontWeight: "bold",
  }
});