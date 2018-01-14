import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

const Link = styled(RouterLink)`
  color: black;
  text-decoration: none;

  &:hover {
    color: #486982;
  }

  &:active {
    color: black;
  }
`

export default Link