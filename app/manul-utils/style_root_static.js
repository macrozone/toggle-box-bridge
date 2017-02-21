import React from 'react';
import { StyleRoot as RadiumStyleRoot } from 'radium';
/**
  use this StyleRoot if you arent inside a mantra-app, e.g. in storybook or server emails

  TODO: replace to something more generic, that injects simple mantra-context

**/
const StyleRoot = class extends React.Component {
  getChildContext() {
    const { theme, i18n } = this.props;
    return {
      context: { theme, i18n }, // inject theme as mantra context
    };
  }
  render() {
    return <RadiumStyleRoot {...this.props} />;
  }
};
StyleRoot.childContextTypes = {
  context: React.PropTypes.object,
};

StyleRoot.displayName = 'StyleRoot';


export default StyleRoot;
