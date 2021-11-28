import React from 'react'
import { BotaoCarrinho } from './components/botaoCarrinho'
import { BotaoContratacao } from './components/botaoContratacao'
import "./styled.css"

export default class App extends React.Component {
	state = {
		telaPrincipal: "Contrato"
	}

	escolherTela = () => {
   switch (this.state.telaPrincipal){
    case "Carrinho":
     return <BotaoContratacao paginaContrato={this.paginaCarrinho}/>
    case "Contrato":
     return <BotaoCarrinho paginaCarrinho={this.paginaContrato}/>
  } 
 }

 paginaContrato = (event) => {
   this.setState({paginaContrato: event.target.value})
 }

 paginaCarrinho= (event) => {
  this.setState({paginaCarrinho: event.target.value})
 }



  
  render(){
    
    return (
      <div>
		  <h1>LabeNinjas</h1>
		  <BotaoContratacao>
			  <button onClick="Contratar">Contratar ninjas</button>
		  </BotaoContratacao>
		  <BotaoCarrinho>
			  <button onClick="Carrinho">Adicionar ao carrinho</button>
		  </BotaoCarrinho>
      </div>
    );
  }
}  
	
	