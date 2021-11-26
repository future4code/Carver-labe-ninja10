import React from "react";
import axios from "axios"

export default class App extends React.Component {
  state={
    title:"",
    description:"",
    price:"",
    paymentMethods:[],
    dueDate: ""
 }
 handledueDate=(event)=>{
   this.setState({dueDate:event.target.value})
 }
handletitle=(event)=>{
    this.setState({title:event.target.value})
}
handledescription=(event)=>{
    this.setState({description:event.target.value})
}
handleprice=(event) =>{
    this.setState({price:event.target.value})
}
handlepaymentMethods=(event)=>{
    this.setState({paymentMethods:event.target.value})
}
fazerCadastro=()=>{
  const url= "https://labeninjas.herokuapp.com"
  const body={
      title:this.state.title,
      description:this.state.description,
      price:this.state.price,
      paymentMethods: this.state.paymentMethods


  }

axios.post(url,body, {
  headers: {
      Authorization: "a09ea8ed-2736-4486-b536-323e3adceb22"
  }
})
.then((res) => {
  alert (" serviço cadastrado com sucesso ") 
})
.catch((err)=>{
alert("erro ao criar serviço")
})
}
  render(){
    return (
      <div>
             <h2>Cadastro</h2>
             <form>
             <input 
        placeholder={"title"}
        value={this.state.title}
        type="text"
        onChange={this.handletitle}/>
        <input 
        placeholder={"description"}
        value={this.state.description}
        onChange={this.handledescription}/>
        <input 
        placeholder={"price"}
        value={this.state.price}
        type="number"
        onChange={this.handleprice}
        />
        <input
         placeholder={"dueDate"}
        value={this.state.dueDate}
        onChange={this.handledueDate}
        type="date"
        />
      <select >
      <option value="cartão crédito">cartão crédito</option>
      <option value="pix">pix</option>
      <option value="pay pal">pay pal</option>
      </select>
      <button onClick={ this.fazerCadastro}>Cadastrar</button>
      
        
             </form>
       </div>
        
     );
   }
   

  }
 