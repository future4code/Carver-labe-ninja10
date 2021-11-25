import React, { Component } from 'react'
import styled from 'styled-components'


const HeaderContainer = styled.div`
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
export default class Header extends React.Component {
  

    render() {
      return (
      
          
          <HeaderContainer>
            <ContainerBotao>
            <button onClick={this.props.goToTelaHome}>Home</button>
            <button>Carrinho</button>
            </ContainerBotao>
            <h2>LabeNinjas</h2>
          </HeaderContainer>
    )
  }
}