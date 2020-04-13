import React, {Component} from 'react';
import {StyleSheet,Text,TouchableOpacity} from 'react-native';
import {Card} from './common';
import {connect} from 'react-redux';
import *  as actions from '../actions';

class BookItem extends Component{
    onPressed(){
        const {book} =this.props;
        this.props.selectBook(book);
    }
    render(){
        const {book} =this.props;
        return(
            <TouchableOpacity onPress={this.onPressed.bind(this)}>
            <Card>
                 <Text style={styles.titleStyle}>{book.title}</Text>
                <Text style={styles.authorStyle}>{book.author}</Text>
            </Card>
            </TouchableOpacity>
        )
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

    export default connect(null,actions) (BookItem);