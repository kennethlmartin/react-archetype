/**
 * @module app/pages/Example
 */

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet-async';

import './Example.css';
import Link from 'app/containers/Link';
import { fetchExample } from 'app/state/example/actions';
import { getExampleItems } from 'app/state/example/selectors';
import { RouteWithSubRoutes } from 'app/components/utilities';

const ExamplePage = ({ exampleItems, fetchExample, routes }) => (
  <Fragment>
    <Helmet>
      <title>{'ExamplePage'}</title>
      <body id="example-page" />
    </Helmet>
    <h1>
      {'ExamplePage'}
    </h1>
    <div className="navigation">
      <Link route="HOME">
        {'Go Home'}
      </Link>
      <Link route="EXAMPLE_NESTED">
        {'Go Example Nested'}
      </Link>
    </div>
    <section className="example-content">
      <button onClick={() => fetchExample()}>{'fetch example'}</button>
      <div>
        {exampleItems}
      </div>
    </section>
    {
      routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))
    }
  </Fragment>
);

ExamplePage.propTypes = {
  exampleItems: PropTypes.array,
  fetchExample: PropTypes.func,
  routes: PropTypes.array,
};

const mapStateToProps = state => ({
  exampleItems: getExampleItems(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchExample,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ExamplePage);
