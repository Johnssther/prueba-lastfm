import React from 'react'
import { Text, View, Button, FlatList } from 'react-native';
import ItemList from '../../components/itemList/itemList';
import styles from './styles'

const ArtistView = (props) => {
    const {artists, page_previous, page_next} = props
    console.log(props);
    return(
        <View>
            <View style={styles.section}>
                <View>
                    <Button 
                        title="Anterior"
                        color={'red'}
                        onPress={() => page_previous()}
                        disabled={artists.topartists['@attr'].page <= 1 ? true:false}
                    />
                </View>
                <View>
                    <Text>Country: {artists.topartists['@attr'].country}</Text>
                    <Text>Page: {artists.topartists['@attr'].page}</Text>
                    <Text>perPage: {artists.topartists['@attr'].perPage}</Text>
                    <Text>total: {artists.topartists['@attr'].total}</Text>
                    <Text>totalPages: {artists.topartists['@attr'].totalPages}</Text>
                </View>
                <View>
                    <Button 
                        title="Siguiente"
                        color={'red'}
                        onPress={() => page_next()}
                    />
                </View>
            </View>
            <FlatList
                data={artists.topartists.artist}
                renderItem={(item)=><ItemList item={item} />}
            />
        </View>
    );
}

export default ArtistView