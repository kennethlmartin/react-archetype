/**
 * @module app/pages/Example
 */

import PropTypes from 'prop-types';
import React, { Fragment, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, AnyAction, Dispatch } from 'redux';
import { Helmet } from 'react-helmet-async';
import { Route, RouteProps } from 'react-router';

import './Example.pcss';
import Button from 'app/components/elements/Button';
import Link from 'app/containers/Link';
import RouteWithSubRoutes from 'app/components/utilities/RouteWithSubRoutes';
import { fetchExample } from 'app/state/example/actions';
import { getExampleItems } from 'app/state/example/selectors';

interface PropTypes {
  exampleItems: Array<number>;
  fetchExample: Function;
  routes: Array<RouteProps>;
}

const ExamplePage = ({ exampleItems, fetchExample, routes }: PropTypes) => (
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
      <Button onClick={() => fetchExample()}>{'fetch example'}</Button>
      <div>
        {exampleItems}
      </div>
    </section>
    {routes.map((route, i: number) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
  </Fragment>
);

const mapStateToProps = (state: object) => ({
  exampleItems: getExampleItems(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  fetchExample,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ExamplePage);
