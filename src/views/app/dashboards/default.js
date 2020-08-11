import React, { Component, Fragment } from 'react';
import { injectIntl } from 'react-intl';
import {  Card, CardBody, CardTitle } from "reactstrap";
import { Row } from 'reactstrap';
import Products from '../../../components/Products'
import Filter from '../../../components/filter'
import Basket from '../../../components/Basket'
import { Provider } from "react-redux";
import store from "../../../store";
class DefaultDashboard extends Component {
 
  
  
  render() {
    const { messages } = this.props.intl;

    return (
    <Provider store={store}>
      <Fragment>
        <h1 className="mb-4">
CRAFT TUNISIA </h1>
        <Row>
        <div className="col-md-9">
          <Filter />
  
        <hr></hr>
      
          <Products/>
        </div>
        <div className="col-md-3">
          <Basket/>

        </div>
        </Row>
      </Fragment>
    </Provider>
    );
  }
}
export default injectIntl(DefaultDashboard);
