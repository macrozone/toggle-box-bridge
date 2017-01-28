import React from 'react';

const Scroll = class extends React.Component {

  componentDidUpdate() {
    this.element.scrollTop = this.props.scrollTop;
  }
  onScroll() {
    this.props.handleScroll(this.element);
  }
  render() {
    return (
      <div
        ref={(element) => { this.element = element; }}
        onScroll={() => this.element && this.props.onScroll(this.element.scrollTop)}
        style={{
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          ...this.props.style,
        }}
      >
        {this.props.children}
      </div>
    );
  }
};

Scroll.displayName = 'Scroll';

export default Scroll;
