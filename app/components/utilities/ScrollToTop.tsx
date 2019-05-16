/**
 * @module app/components/utilities/ScrollToTop
 */

import { Component } from 'react';
import { withRouter } from 'react-router-dom';

type Props = {
  location: string;
}

class ScrollToTop extends Component<Props> {
  componentDidUpdate(prevProps: Props) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);
