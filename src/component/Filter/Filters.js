import React from "react";

export default class Filters extends React.Component{
    render(){
        const getJobs = this.state.produtos.map((jobs) => (
            <div key={jobs.id}>
              <h1>{jobs.title}</h1>
              <p>
                Até {jobs.dueDate} por R$ {jobs.price},00
              </p>
              <button onClick={this.props.goToPageDetahes}>ver detalhes</button>
             
      
              <button>Adicionar ao Carrinho</button>
            </div>
          ));
        return(
            <div>
                     {getJobs}
            </div>
        )
    }
}
