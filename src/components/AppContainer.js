import React, { Component } from 'react'
import styled from 'styled-components'
import image from '../Assets/labeninjas2 (1).png'


const Root = styled.div`
margin: 0;
padding: 0;

`

const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
>h2{margin-right: 10px}
background-color: #B2C9AB;
`

const ContainerBotao = styled.div`
display: flex;
justify-content: space-between;
width: 10%;
margin-left: 10px;
>button{background-color: #B2C9AB}
>button{
  background-color: #B2C9AB;
  padding: 8px;
  border-radius: 20px;
  &:hover{cursor: pointer}

}
`

const ContainerCard = styled.div`
display:flex;
height: 100vh;
justify-content: space-around;
align-items: center;

`
const Card = styled.div`
display: flex;
flex-direction: column;
height: 200px;
margin-top: -240px;
width: 500px;
justify-content: space-around;
align-items: center;
>p{ 
  background-color: #B2C9AB;
  padding: 20px;
  border-radius: 20px;
}
>button{
  background-color: #B2C9AB;
  padding: 8px;
  border-radius: 20px;
  &:hover{cursor: pointer}

}

`
const CardImagem = styled.div`
border: 1px solid black;
padding: 40px;
background-color: #B2C9AB;
border-radius: 100px;
`


export class AppContainer extends Component {
  render() {
    return (
    
      <Root>
        <Header>
          <ContainerBotao>
          <button>Home</button>
          <button>Carrinho</button>
          </ContainerBotao>
          <h2>LabeNinjas</h2>
        </Header>
          <ContainerCard> 
          <Card>
          <p>Conectando quem precisa com quem sabe fazer.</p>
          <button>Quero ser um ninja</button>
          <button>Contratar um ninja</button>
          </Card>
          <CardImagem>
           <img src={image}></img> 
          </CardImagem>
          </ContainerCard>
          
         
      </Root>
    )
  }
}
