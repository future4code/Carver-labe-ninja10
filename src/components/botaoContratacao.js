import React from "react"

export class BotaoContratacao extends React.Component {
    
  render() {
    return (
      <div>
         <button onClick={this.props.irParaCarrinho}>Contratar um ninja</button>
      </div>
    )
  }
}

  

