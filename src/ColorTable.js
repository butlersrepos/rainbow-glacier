import { h, Component } from 'preact';
import styled from 'styled-components';

const MyTable = styled.table`
  position: relative;
  font-family: monospace, sans-serif;
  border: 1px solid #111;
  border-radius: 3px;
  background: #eee;
  padding: 4px;
  margin: 8px;

  & tr,
  & td {
    white-space: nowrap;
  }
`

const TitleRow = styled.tr`
  font-size: 1.33em;
  font-weight: bold;
`

const InfoRow = styled.tr`
`

const HexCell = styled.td`
  background-color: ${(props) => props.hex};
  padding: 4px 4px;
  text-shadow: 1px 1px #fff;
`

const FlipButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  font-size: 1.5em;
  background: transparent;
`

export default class ColorTable extends Component {
  flip = () => {
    this.setState({
      flipped: !this.state.flipped
    })
  }

  render({ name, colors }) {
    const { flipped } = this.state;

    return (
      <MyTable>
        <TitleRow>
          <td colspan="3">{name}</td>
        </TitleRow>
        <FlipButton onClick={this.flip}>{flipped ? '🙂' : '🙃'}</FlipButton>
        {(colors || []).map(colorEntry => {
          return flipped
            ? (
              <InfoRow>
                <HexCell hex={colorEntry.hex}>{colorEntry.hex}</HexCell>
                <td>{colorEntry.model}</td>
                <td>{colorEntry.name}</td>
              </InfoRow>
            )
            : (
              <InfoRow>
                <td>{colorEntry.name}</td>
                <td>{colorEntry.model}</td>
                <HexCell hex={colorEntry.hex}>{colorEntry.hex}</HexCell>
              </InfoRow>
            )
        })}
        {(colors || []).length === 0 && <tr>No colors found.</tr>}
      </MyTable>
    )
  }
}