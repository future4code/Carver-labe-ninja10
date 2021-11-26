import styled from "styled-components";

export const DivCard = styled.div`
   border: solid;
   display: flex;
   flex-direction: column;
   min-height: 30vh;
   max-width: 30vw;
   text-align: center;
   justify-content: space-around;  
`

export const DivPai = styled.div`
border: solid red ;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
column-gap: 25px;
row-gap: 20px;
`