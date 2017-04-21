import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import ProductListView from '../components/productlistview';
import productShape from '../productshape'

// @connect(state => ({
  
//   posts: state.posts
// }))

class ProductList extends Component {
    // componentDidMount( ) {
    //     if ( this.props.products.length === 0 ) {
    //         this.props.fetchList( );
    //     }
    // }

    render( ) {
        
        return (
            <ProductListView products={ this.props.products }></ProductListView>
        );
    }
}

const { arrayOf, func } = React.PropTypes;

ProductList.propTypes = {
    products: arrayOf( productShape )
};

ProductList.defaultProps = {
    products: [{
            "id": 1,
            "name": "Banana",
            "permalink": "banana",
            "price": 12.99,
            "description": "Banana!",
            "stock": 100,
            "imageUrl": "/dist/images/banana.jpg"
        },
        {
            "id": 2,
            "name": "Apple",
            "permalink": "apple",
            "price": 9.99,
            "description": "Apple!",
            "stock": 100,
            "imageUrl": "/dist/images/apple.jpg"
        } ],
};


const mapStateToProps = ( state ) => ( {
    products: state.product,
} );

export default connect( mapStateToProps )( ProductList );