/**
 * @module app/components/utilities/ScrollToTop
 */

import { Component } from 'react';
import { withRouter } from 'react-router-dom';

interface PropTypes {
  location: string;
}

class ScrollToTop extends Component<PropTypes> {
  componentDidUpdate(prevProps: PropTypes) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);
