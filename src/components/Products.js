import React, { Component, Fragment } from 'react';
import { Row, Card, CardBody, CardTitle } from "reactstrap";
import { Colxx, Separator } from "../components/common/CustomBootstrap";

import { connect } from "react-redux";
import util from "../util";
import { addToCart } from "../actions/cartActions";
import { fetchProducts } from "../actions/productActions";
class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
    render(){

        const productItems = this.props.products.map((product) => (
          <div className="glide-item">
             <Fragment>
              <Card style={{width:"400px"}}>
            <div className="w-50 position-relative">
              <a href={product.id} 
                onClick={(e) => this.props.addToCart(this.props.cartItems, product)}>
              </a>
        
                <img className="card-img-left" src={product.img} alt={product.title} style={{width:"400px"}} />

        
               <Row>
               <Colxx xxs="12">
                  <CardTitle>
        <h6 className="mb-4" >{product.title}</h6>
               </CardTitle>
                </Colxx>
              </Row>
              <Row  style={{marginLeft:"50px"}}  >
              <Colxx xxs="12">
              {product.description}
                <p className="text-muted text-small mb-0 font-weight-dark">
                    <b>{product.price
                    }</b>
                </p>
                </Colxx>
              </Row>
                  
          </div>
            <div className="w-50">
              <CardBody>
               <div>
            
                <button className="btn btn-primary"  
                    onClick={(e)=>this.props.addToCart(e,product)} >Add to Cart</button>
              
               </div>
               
               
              </CardBody>

            </div>
          </Card>
                  </Fragment>
          
        </div>
    
      ));
            
        return(
            <div className="row">
                {productItems}
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);