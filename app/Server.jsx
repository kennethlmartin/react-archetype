/**
 * @module app/Server
 */

import PropTypes from 'prop-types';
import React from 'react';

import { PreloadedState } from 'app/components/scripts';
import { RenderMarkup, RenderScript, RenderStylesheet } from 'app/components/render';

const Server = props => (
  <html {...props.helmet.htmlAttributes.toComponent()}>
    <head>
      {props.helmet.title.toComponent()}
      {props.helmet.meta.toComponent()}
      {props.helmet.link.toComponent()}
      {
        props.assets.styles.map(asset => (
          <RenderStylesheet href={asset} key={asset} />
        ))
      }
    </head>
    <body {...props.helmet.bodyAttributes.toComponent()}>
      <RenderMarkup html={props.markup} id="app-root" />
      <PreloadedState state={props.preloadedState} />
      {
        props.assets.scripts.map(asset => (
          <RenderScript async key={asset} src={asset} />
        ))
      }
    </body>
  </html>
);

Server.propTypes = {
  assets: PropTypes.object.isRequired,
  helmet: PropTypes.object.isRequired,
  markup: PropTypes.string.isRequired,
  preloadedState: PropTypes.object.isRequired,
};

export default Server;
