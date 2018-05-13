import { h, Component } from 'preact';
import styled from 'styled-components';
import ColorTable from './ColorTable';
import * as colorSnapshots from '../snapshots/*.json';

delete colorSnapshots.default;

let Container = styled.div`
display: flex;
`
export default () => {
  let productNames = Object.keys(colorSnapshots);

  return (
    <div>
      <nav>rainbow glacier online</nav>
      <Container>
        {productNames.map(productName => <ColorTable name={productName} colors={colorSnapshots[productName].colors} />)}
      </Container>
    </div>
  )
}