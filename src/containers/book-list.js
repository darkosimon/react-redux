import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">{book.title}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }

}

function mapStateToProps(state) {
    //state income parameter is the state of the redux

    //Whatever is returned here, will show up
    //inside of BookList container as a props
    return {
        books: state.books
    };
}

// Anything returned from this func will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook action is called, the result should be passed
    // to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);