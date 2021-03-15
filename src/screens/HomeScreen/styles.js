import {StyleSheet} from 'react-native';

export default  StyleSheet.create({
    screen: {
      padding: 50
    },

    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '101%',
        borderColor:"black"
      },
      input: {
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderColor:'black',
        marginBottom: 10
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '70%'
      },
      button: {
        width: '80'
      },
      listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
      },
      headerLink: {
        padding:20,
        fontWeight: "bold"
      },
      header: {
        fontWeight: "bold",
        padding: 13,
      
      }

    
})