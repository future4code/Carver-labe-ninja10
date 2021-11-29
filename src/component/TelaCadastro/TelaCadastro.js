import React from "react";
import axios from "axios";

export default class App extends React.Component {


fazerCadastro=()=>{
  const url= "https://labeninjas.herokuapp.com"
  const body={
      title:this.props.title,
      description:this.props.description,
      price:this.props.price,
      paymentMethods: this.props.paymentMethods


  }

axios.post(url,body, {
  headers: {
      Authorization: "a09ea8ed-2736-4486-b536-323e3adceb22"
  }
})
.then((res) => {
 console.log(res)
})
.catch((err)=>{
console.log (err)})
}
  render(){
    return (
      <div class="forms">
             <h2>Cadastro</h2>
             <div>
             <form>
             <input 
        placeholder={"title"}
        value={this.props.title}
        type="text"
        onChange={this.handletitle}/>
        <input 
        placeholder={"description"}
        value={this.props.description}
        onChange={this.handledescription}/>
        <input 
        placeholder={"price"}
        value={this.props.price}
        type="number" min='1' step='1'
        onChange={this.handleprice}
        />
        <input
         placeholder={"dueDate"}
        value={this.props.dueDate}
        onChange={this.handledueDate}
        type="date"
        />
      <select >
      <option value="cartão crédito">cartão Crédito</option>
      <option value="cartão crédito">cartão Débito</option>
      <option value="pix">Pix</option>
      <option value="pay pal">Dinheiro</option>
      </select>
             <button onClick={this.fazerCadastro}>Cadastrar</button>
             </form>

             </div>
           
       </div>
        
     );
   }
   

  }
 