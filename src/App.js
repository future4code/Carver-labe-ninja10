import React from 'react'
import { BotaoCarrinho } from './components/botaoCarrinho'
import { BotaoContratacao } from './components/botaoContratacao'
import "./styled.css"

export default class App extends React.Component {



  
  render(){
    
    return (
      <div>
		  <h1>LabeNinjas</h1>
		  <BotaoContratacao>
			  <button onClick="contrato">Contratar um ninja</button>
		  </BotaoContratacao>
		  <BotaoCarrinho>
			  <button onClick="carrinho">Adicionar ao carrinho</button>
		  </BotaoCarrinho>
		</div>
    );
  }
}  
	
	