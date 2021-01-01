import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PrimaryButton = styled(Link)`
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  background-color: #209bde;
  border-color: #209bde;
  user-select: none;
  padding: 0.525rem 0.75rem;
  font-size: 0.8rem;
  border-radius: 0.4rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    color: #fff;
    text-decoration: none;
    background-color: #2946f7;
    border-color: #1d3cf6;
  }

  &:active {
    color: #fff;
    text-decoration: none;
    background-color: #1d3cf6;
  }

  &:focus {
    color: #fff;
    text-decoration: none;
    box-shadow: 0 0 0 0.2rem rgba(105, 125, 249, 0.5);
  }
`;

export default PrimaryButton;
