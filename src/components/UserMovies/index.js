const React = require('react');
const PureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');
const _ = require('lodash');
const WidthProvider = require('react-grid-layout').WidthProvider;
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';


let ResponsiveReactGridLayout = require('react-grid-layout').Responsive;
ResponsiveReactGridLayout = WidthProvider(ResponsiveReactGridLayout);

/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */


const itemsArray = [
  {
    i: '1',
    x: 1,
    y: 0,
    w: 1,
    h: 1,
    add: false,
    type: 't'
  },

  {
    i: '2',
    x: 2,
    y: 0,
    w: 1,
    h: 1,
    add: false,
    type: 'p'

  },
  {
    i: '3',
    x: 3,
    y: 0,
    w: 1,
    h: 1,
    add: false,
    type: 'v'
  }
];

const AddRemoveLayout = React.createClass({
  mixins: [PureRenderMixin],

  getDefaultProps() {
    return {
      className: 'layout',
      cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
      rowHeight: 100,
      onLayoutChange: () => {}
    };
  },

  getInitialState() {
    return {
      items: itemsArray,
      newCounter: 0
    };
  },

  createElement(el) {
    const removeStyle = {
      position: 'absolute',
      right: '2px',
      top: 0,
      cursor: 'pointer',
      zIndex: 20
    };
    const i = el.add ? '+' : el.i;
    return (
      <div key={i} data-grid={el}>
      <span className="remove" style={removeStyle} onClick={this.onRemoveItem.bind(this, i)}>x</span>
        {el.add ?
          <span className="add text" onClick={this.onAddItem} title="You can add an item by clicking here, too.">Add +</span>
        : <span className="text">{i}</span>}
        </div>
    );
  },

  onAddItem() {
    /* eslint no-console: 0*/
    console.log('adding', 'n' + this.state.newCounter);
    this.setState({
      // Add a new item. It must have a unique key!
      items: this.state.items.concat({
        i: 'n' + this.state.newCounter,
        x: this.state.items.length * 2 % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2
      }),
      // Increment the counter to ensure key is always unique.
      newCounter: this.state.newCounter + 1
    });
  },

  // We're using the cols coming back from this to calculate where to add new items.
  onBreakpointChange(breakpoint, cols) {
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    });
  },

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
    this.setState({layout: layout});
  },

  onRemoveItem(i) {
    console.log('removing', i);
    this.setState({items: _.reject(this.state.items, {i: i})});
  },

  render() {
    return (
      <div>
        <button onClick={this.onAddItem}>Add Item</button>
        <ResponsiveReactGridLayout onLayoutChange={this.onLayoutChange} onBreakpointChange={this.onBreakpointChange}
            {...this.props}>
          {_.map(this.state.items, this.createElement)}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
});

module.exports = AddRemoveLayout;
