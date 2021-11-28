import React from 'react'

export class BotaoCarrinho extends React.Component {
  render() {
    return (
      <div>
         <button onClick={this.props.irParaContratacao}>Adicionar ao carrinho</button>
      </div>
    )
  }
}
