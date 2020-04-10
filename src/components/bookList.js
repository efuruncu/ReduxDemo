import React, {Component} from 'react';
import {Text,View,StyleSheet,FlatList} from 'react-native';
import { connect } from 'react-redux';
import {Card} from './common';

class BookList extends Component {
    renderItem({item}){
            return(
                <Card>
                    <Text style={styles.titleStyle}>{item.title}</Text>
                    <Text style={styles.authorStyle}>{item.author}</Text>
                </Card>
            )
    }

    render(){
        const {books} = this.props;
        return(
            <View>
                <FlatList 
                data={books}
                renderItem={this.renderItem}
                keyExtractor={(item) =>item.isbn}
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
return{
    books:state.books
}
}

const styles=StyleSheet.create({
titleStyle:{
fontSize:16,
color:'black'
},
authorStyle:{
fontSize:12,
color:'gray'
}
});

export default connect(mapStateToProps)(BookList);