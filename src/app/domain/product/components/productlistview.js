import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import productShape from '../productshape'

export default class ProductListView extends React.Component {
  // static defaultProps = {
  //   products: React.PropTypes.array.isRequired
  // }

  render() {
    return (
      <div>
        {this.props.products          
          .map(post => {
            return (
              <div key={post.id}>
                <Link to={`/products/${post.id}`}>
                  <h2 className="post-header-link">{post.name}</h2>
                </Link>
              </div>
            );
          })}
      </div>
    );
  }
}

const { arrayOf, func } = React.PropTypes;

ProductListView.propTypes = {
    products: arrayOf( productShape )
};
