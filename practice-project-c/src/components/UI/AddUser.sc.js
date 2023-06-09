import styled from 'styled-components';
import Card from './Card.sc';

const Input = styled(Card)`
    margin: 2rem auto;
    padding: 1rem;
    width: 90%;
    max-width: 40rem;
    & label {
        display: block;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }
    & input {
        font: inherit;
        display: block;
        width: 100%;
        border: 1px solid #ccc;
        padding: 0.15rem;
        margin-bottom: 0.5rem;
    }
    & input:focus {
        outline: none;
        border-color: #4f005f;
    }
`;

export default Input;