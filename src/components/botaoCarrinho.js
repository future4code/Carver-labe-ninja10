import React from 'react'

export class BotaoCarrinho extends React.Component {
  render() {
    return (
      <div>
         <button onClick={this.props.paginaContrato}>Ir para Carrinho</button>
      </div>
    )
  }
}
