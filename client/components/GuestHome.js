import React from 'react';
import { connect } from 'react-redux';
import AllProducts from './AllProducts';
import Carousel from './Carousel';
import { getProducts } from '../store/products';
import { Link } from 'react-router-dom';

//~~~~> TODO: NOT SURE WHY TRENDING PRODUCT LINKS AREN'T WORKING

// CLASS COMPONENT
class GuestHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    const slicedProducts = this.props.products.slice(6, 9);

    return (
      <div>
        <Carousel />
        <div className="container-sm">
          <div className="row">
            <Link to="/products">
              <button
                data-cy="shop-all-plants-btn"
                type="button"
                className="btn btn-primary"
              >
                Shop All Plants
              </button>
            </Link>
          </div>
        </div>
        <div className="trending-container">
          <h3>What's Trending</h3>
          <div className="trending-view">
            {slicedProducts.map((product) => (
              <div key={product.id} className="all-products-tile">
                <h5>{product.name}</h5>
                <img
                  src={product.imageUrl}
                  className="all-products-thumbnails"
                />
                <p>{product.price}</p>

                <Link to={`/products/${product.id}`}>
                  <button
                    data-cy="view-plant-btn"
                    className="btn btn-primary"
                    type="button"
                  >
                    View Plant
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts()),
  };
};

export default connect(mapState, mapDispatch)(GuestHome);
