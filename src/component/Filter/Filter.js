import React from "react";

export default class Filter extends React.Component{
    render(){
        return(
            <div>
            <p>Procure pelo <span>Nome</span>:</p>
          <input
            placeholder='Pesquisar'
            value={this.state.filterName}
            onChange={this.Updatequery}
          />
          <p>Procure pelo <span>Preço</span>:</p>
          <input
            type='number'
            placeholder='R$ Preço Min'
            value={this.state.minPrice}
            onChange={this.UpdateMinPrice}
          />
          <input
            type='number'
            placeholder='R$ Preço Máx'
            value={this.state.maxPrice}
            onChange={this.UpdateMaxPrice}
          />

            </div>
        )
    }
}