/**
 * @module app/components/utilities/ScrollToTop
 */

import PropTypes from 'prop-types';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
  static propTypes = {
    location: PropTypes.object,
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);
