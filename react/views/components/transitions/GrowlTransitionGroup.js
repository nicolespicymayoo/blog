import React from 'react';
const ReactTransitionGroup = React.addons.TransitionGroup;
const options = _.extend({}, options, {
  duration: 500,
  easing: [ 250, 15 ], //spring physics
  // easing: [ 0.17, 0.67, 0.83, 0.67 ] //bezier curve
});

export default GrowlTransitionGroupChild = React.createClass({
  componentWillEnter: function(done) {
    var $node = $(this.getDOMNode());
    $node
    .velocity({
      translateZ: 0,
      scale: [1, 0]
    }, {
      easing: options.easing,
      duration: options.duration,
      queue: false
    })
    .velocity('fadeIn', {
      duration: options.duration,
      queue: false,
      complete: done
    });
  },

  componentWillLeave: function(done) {
    var $node = $(this.getDOMNode());
    $node
      .velocity('fadeOut', {
        duration: options.duration,
        complete: done
      });
  },

  render: function() {
    return React.Children.only(this.props.children);
  }
});

GrowlTransitionGroup = React.createClass({
  _wrapChild: function(child) {
    return (
      <GrowlTransitionGroupChild>
        {child}
      </GrowlTransitionGroupChild>
    );
  },

  render: function() {
    return (
      <ReactTransitionGroup
        {...this.props}
        childFactory={this._wrapChild}
      />
    );
  }
});