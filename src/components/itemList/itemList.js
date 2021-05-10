import React from 'react'
import {View, Text, Linking, Image} from 'react-native'
import styles from './itemList.styles';

const ItemList = (props) => {
    const { item, index } = props.item
    return(
        <View key={index} style={styles.card}>
            <View style={styles.image}>
                <Image
                    style={styles.logo}
                    source={{
                        uri:item.image[2]['#text']
                    }}
                />
            </View>
            <View style={styles.info}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.text}>Listeners: {item.listeners}</Text>
                <Text style={styles.text}>Streamable: {item.streamable == 0 ? 'yes':'no'}</Text>
                <Text style={styles.url}
                    onPress={() => Linking.openURL(item.url)}>
                    Ver pagina web
                </Text>
            </View>
        </View>
    );
}

export default ItemList