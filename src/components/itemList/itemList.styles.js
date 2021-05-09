import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    list: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:1,
        marginBottom:20,
    },
    section: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    card: {
        marginBottom:2,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        width:350,

        shadowColor: "#811c18",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 1,
        
    },
    info: {
        justifyContent: 'center',
        width:'100%',
        paddingLeft:15,
    },
    image: {
       // none style
    },
    logo: {
        width: 100,
        height: 100,
    },
    title: {
        fontSize:20,
        fontWeight:'bold',
    },
    text: {
        fontSize:12,
    },
    url: {
        color:'blue'
    },
    btn: {
        backgroundColor:'red',
    }
})
