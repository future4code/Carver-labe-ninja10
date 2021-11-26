import React, { Component } from 'react'
import styled from 'styled-components'
import image from '../../Assets/labeninjas2.png'


const Root = styled.div`
margin: 0;
padding: 0;

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
margin-top: -341px;
width: 500px;
justify-content: space-around;
align-items: center;
>p{ 
  background-color: #B2C9AB;
  padding: 28px;
  border-radius: 42px;
}
>button{
  background-color: #B2C9AB;
  padding: 8px;
  border-radius: 20px;
  &:hover{cursor: pointer}

}
`
const CardImagem = styled.div`
padding: 65px;
background-color: #B2C9AB;
border-radius: 127px;
`
const CardContainer = styled.div`
display:flex;
height: 88vh;
align-items: center;
flex-direction: column;
justify-content: flex-start;
>p{
  color: grey;
}
`
const H3 = styled.div`
display:flex;
flex-direction: column;
background-color: #B2C9AB;
margin: 10px;


`


export default class HomePage extends React.Component {
  
  render() {
    return (
    
      <Root>
          <ContainerCard> 
          <Card>
          <p>Conectando quem precisa com quem sabe fazer.</p>
          <button onClick={this.props.goToTelaCadastro}>Quero ser um ninja</button>
          <button onClick={this.props.goToPageSearch}>Contratar um ninja</button>
          </Card>
          <CardImagem>
           <img src={image}></img> 
          </CardImagem>
          </ContainerCard>
          <CardContainer> 
          <h1>Quem contratou um ninja recomenda:</h1>
          <p>São mais de 3 milhões de clientes e profissionais felizes</p>
           <h2>O que é LabeNinja?</h2>
           <p>É a maior plataforma de contratação de serviços do Brasil. Conectamos Profissionais de todo o Brasil com
             pessoas solicitando serviço.</p>
             <p> Atendendo com qualidade, facilidade e rapidez todos os tipos de necessidade.</p>
             </CardContainer>
             <H3>
            <h3>Faça o seu pedido. Fale o que você precisa. É rápido e de graça!</h3> 
            <h3>Receba até quatro orçamentos. Profissionais avaliados entram em contato com você em instantes!</h3>
            <h3>Escolha o melhor. Negocie direto com eles. Fácil como nunca foi antes!</h3>
            </H3>
          {/* </CardContainer> */}
      </Root>
    )
  }
}
