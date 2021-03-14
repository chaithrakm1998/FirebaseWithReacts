import React from 'react';
import { StyleSheet,Text} from 'react-native';
export default function AboutScreen() {


  return(
     
      <Text styles={styles.footerLink}>This is a ToDo Application.Set Your Goals Here....!!!!</Text>
    
  );
}

const styles=StyleSheet.create({

footerLink: {
  color:"#788eec",
  fontWeight:"bold",
  fontSize: 30
}
})
