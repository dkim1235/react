import styled from 'styled-components';
import Card from './Card.sc';

const UsersListStyled = styled(Card)`
    margin: 2rem auto;
    width: 90%;
    max-width: 40rem;
  & ul {
    list-style: none;
    padding: 1rem;
  }
  & li {
    border: 1px solid #ccc;
    margin: 0.5rem 0;
    padding: 0.5rem;
  }
`;

export default UsersListStyled;