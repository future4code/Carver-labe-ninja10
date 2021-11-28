import styled from "styled-components";

export const DivCard = styled.div`
   display: flex;
   flex-direction: column;
   min-height: 20vh;
   max-width: 20vw;
   text-align: center;
   justify-content: space-around;  
   background-color: #B2C9AB;
   border-radius: 20px;
`

export const DivPai = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
column-gap: 25px;
row-gap: 20px;
margin: 10px;
`

export const ButtonsDiv = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    height: 30px;
    
    
    button{
        width: 43%;
        font-size: 0,5em;
  

    }
`

export const DivSearch = styled.div`
    display:flex;
    flex-direction:row;
    padding:20px;
    justify-content: center;
    gap: 30px;

    input{
        width: 14%;
        text-align: center;
    }

    button{
        
    }
    `