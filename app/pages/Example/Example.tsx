/**
 * @module app/pages/Example
 */

import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Helmet } from 'react-helmet-async';

import './Example.pcss';
import Button from 'app/components/elements/Button';
import Link from 'app/containers/Link';
import RouteWithSubRoutes from 'app/components/utilities/RouteWithSubRoutes';
import { fetchExample } from 'app/state/example/actions';
import { getExampleItems } from 'app/state/example/selectors';
import { RouteInterface } from 'app/routes';

type Props = {
  exampleItems: Array<number>;
  fetchExample: Function;
  routes: Array<RouteInterface>;
}

const ExamplePage = ({ exampleItems, fetchExample, routes }: Props) => (
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
