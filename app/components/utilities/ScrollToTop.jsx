/**
 * @module app/components/utilities/ScrollToTop
 */

import PropTypes from 'prop-types';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object,
  };

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
