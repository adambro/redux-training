import styled from 'styled-components'

const Button = styled.button`
  border: 2px solid black;
  background-color: white;
  color: black;
  cursor: pointer;
  font-size: 1em;
  font-family: inherit;
  padding: 0.75em 2.5em;
  text-decoration: none;
  text-transform: uppercase;
  outline: none;

  &:active {
    background-color: rgba(0, 0, 0, 0.05);
  }
`

export default Button