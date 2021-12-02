import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container: {
        justifyContent: "center",
        flex: 1,
        backgroundColor:"#fff",
        paddingRight: 17,
        paddingLeft: 17,
        marginTop: 40,
        
      },
      textHead: {
        textAlign:"center",
        fontWeight:"bold",
        fontSize: 20,
        marginBottom: 20,
        marginTop:30
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