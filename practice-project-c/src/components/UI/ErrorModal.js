import React from 'react';
import styled from 'styled-components';
import Card from './Card.sc';
import Button from './Button.sc';

const ErrorModalStyled = styled(Card)`
.modal {
    position: fixed;
    top: 30vh;
    left: 10%;
    width: 80%;
    z-index: 100;
    overflow: hidden;
}
  
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.75);
  }
  
  & header {
    background: #4f005f;
    padding: 1rem;
  }
  
  & header h2 {
    margin: 0;
    color: white;
  }
  
  .content {
    padding: 1rem;
  }
  
  .actions {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }
  
  @media (min-width: 768px) {
    .modal {
      left: calc(50% - 20rem);
      width: 40rem;
    }
  }
  `;

const ErrorModal = props => {
    return <ErrorModalStyled>
        <div className="backdrop" onClick={props.onConfirm} />
        <Card className="modal">
            <header>
                <h2>{props.title}</h2>
            </header>
            <div className="content">
                <p>{props.message}</p>
            </div>
            <footer className="actions">
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    </ErrorModalStyled>
};

export default ErrorModal