import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "5%",
      marginTop: "8%",
      backgroundColor: "#fff",
      },
      textHead: {
        textAlign:"center",
        fontWeight:"bold",
        fontSize: 20,
      },
      textOptions: {
        textAlign:"left",
        fontSize: 15,
        fontWeight:"bold",
        paddingTop: 15,
        paddingBottom: 15

      },
      input: {
        backgroundColor:"#FCFCFF",
        borderColor:"#EECCAA",
        borderRadius:20,
        marginBottom: 30,
      },
      inputNote: {
        backgroundColor:"#FCFCFF",
        borderColor:"#EECCAA",
        borderRadius:20,
        marginBottom: 30,
        height: 200,
      },

      button: {
        marginTop: 30,
        borderRadius:5,
        backgroundColor:"#59A834",
      }
});