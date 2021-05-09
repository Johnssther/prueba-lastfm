import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'

const Header = () => {
    const [browser, setBrowser] = useState(false)
    return(
        <View style={styles.header}>
            { !browser ?
            <>
                <Text style={styles.title}>Top Artistas</Text>
                <Button
                    title="Obtener"
                    style={styles.btn}
                    color={'red'}
                    onPress={()=>setBrowser(true)}
                />
            </>
            :
            <>
                <TextInput 
                    style={styles.input}
                    placeholder="Ingrese un pais">

                </TextInput>
                <Button 
                    title="Buscar"
                    style={styles.btn}
                    color={'red'}
                    onPress={()=>setBrowser(false)}
                />
            </>
            }
            

        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height:62,
        width:'100%',
        backgroundColor:'black',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    title: {
        fontSize:30,
        fontWeight:'bold',
        color:'#fff',
        width: '70%',
    },
    input: {
        width: '70%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor:'#fff',
      },
    btn: {
        backgroundColor:'red',
    }
});

export default Header
