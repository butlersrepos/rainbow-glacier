import { h, Component } from 'preact';

export default ({ name, colors }) => (
  <table>
    <thead>
      <tr>{name}</tr>
    </thead>
    <tbody>
      {(colors || []).map(colorEntry => (
        <tr>
          <td>{colorEntry.name}</td>
          <td>{colorEntry.model}</td>
          <td>{colorEntry.hex}</td>
        </tr>
      ))}
      {(colors || []).length === 0 && <tr>No colors found.</tr>}
    </tbody>
  </table>
)