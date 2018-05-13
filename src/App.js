import { h, Component } from 'preact';
import ColorTable from './ColorTable';
import * as colorSnapshots from '../snapshots/*.json';

delete colorSnapshots.default;

export default () => {
  let productNames = Object.keys(colorSnapshots);

  return (
    <div>
      <nav>rainbow glacier online</nav>
      {productNames.map(productName => <ColorTable name={productName} colors={colorSnapshots[productName].colors} />)}
    </div>
  )
}