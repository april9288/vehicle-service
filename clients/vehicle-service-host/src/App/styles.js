import styled from 'styled-components'

export const AppContainer = styled.section` 
    background-color: rgba(0,0,0,0.25);
    min-height: 100vh;

    display:flex;
    justify-content: center;
    align-items: center;

    .text {
        position: fixed;
        top: 10px;
        left: 10px;
        font-size: 5rem;
    }
`