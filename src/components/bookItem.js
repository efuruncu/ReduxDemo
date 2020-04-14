import React, {Component} from 'react';
import {StyleSheet,Text,TouchableOpacity} from 'react-native';
import {Card} from './common';
import {connect} from 'react-redux';
import *  as actions from '../actions';

class BookItem extends Component{
    onPressed(){
        const {book,selected} =this.props;
        selected ?this.props.deselectBook() : this.props.selectBook(book);
    }
    render(){
        const {book,selected} =this.props;

        const descriptionField =selected ? (
            <Text>{book.description}</Text>
        ): null;
        return(
            <TouchableOpacity onPress={this.onPressed.bind(this)}>
            <Card>
                 <Text style={styles.titleStyle}>{book.title}</Text>
                <Text style={styles.authorStyle}>{book.author}</Text>
            </Card>
            {descriptionField}
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

    const mapStateToProps = (state,props) =>{
        const selected= state.selectedBook && state.selectedBook.isbn === props.book.isbn;

        return {
            selected
        }
    }
    export default connect(mapStateToProps,actions) (BookItem);