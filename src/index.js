import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import App from './components/app';
import VendorShow from './routes/vendor/vendor-show';
import PackageShow from './routes/package/package-show';
import CustomerResourceShow from './routes/customer-resource/customer-resource-show';

export default class EHoldings extends Component {
  static propTypes = {
    stripes: PropTypes.shape({
      connect: PropTypes.func.isRequired
    }).isRequired,
    match: PropTypes.shape({
      path: PropTypes.string.isRequired
    }).isRequired
  }

  constructor(props) {
    super(props);
    this.App = props.stripes.connect(App);
    this.VendorShow = props.stripes.connect(VendorShow);
    this.PackageShow = props.stripes.connect(PackageShow);
    this.CustomerResourceShow = props.stripes.connect(CustomerResourceShow);
  }

  render() {
    const rootPath = this.props.match.path;

    return(
      <Switch>
        <Route path={rootPath} exact component={this.App}/>
        <Route path={`${rootPath}/vendors/:vendorId`} exact component={this.VendorShow}/>
        <Route path={`${rootPath}/vendors/:vendorId/packages/:packageId`} exact component={this.PackageShow}/>
        <Route path={`${rootPath}/vendors/:vendorId/packages/:packageId/titles/:titleId`} exact component={this.CustomerResourceShow}/>
      </Switch>
    );
  }
}
