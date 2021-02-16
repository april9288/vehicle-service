import styled from 'styled-components'

export const Title = styled.section`
    text-align: center;
    margin: 1rem 0;
    font-size: 2rem;
`

export const ListWrapper = styled.section`
    display: flex;
    height: 650px;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    padding: 0 2rem;    
    overflow: auto;
`

export const CardWrapper = styled.section`

    background-color: ${({ selected }) => selected && '#d4dade'};

    margin: 0.5rem 0;
    padding: 0 0.5rem;
    font-size: 1.3rem;
    cursor: pointer;
    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 10%);

    .title{
        font-weight: 900;
        padding: 0.5rem 0;
    }

    &:hover {
        background-color: #dfe5ea;
    }
`

export const Button = styled.section`
    display: flex;
    justify-content: flex-end;
    padding: 2rem 3rem;

    button {
        cursor: pointer;
    }
`
