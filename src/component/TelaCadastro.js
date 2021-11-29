import  React from "react"
import axios from "axios"

export default class TelaCadastro extends React.Component{
   
    fazerCadastro = () => {
        const url = "https://labeninjas.herokuapp.com";
        const body = {
          title: this.state.title,
          description: this.state.description,
          price: this.state.price,
          paymentMethods: this.state.paymentMethods
        };
    
        axios
          .post(url, body, {
            headers: {
              Authorization: "a09ea8ed-2736-4486-b536-323e3adceb22"
            }
          })
          .then((res) => {
            console.log("cadastrei");
          })
          .catch((err) => {
            console.log("deu erro aqui ow");
          });
      };
            render(){
            return (
                <div className="forms">
                  <h2>Cadastro</h2>
                  <div>
                    <form>
                      <input
                        placeholder={"title"}
                        value={this.props.title}
                        type="text"
                        onChange={this.handletitle}
                      />
                      <input
                        placeholder={"description"}
                        value={this.props.description}
                        onChange={this.handledescription}
                      />
                      <input
                        placeholder={"price"}
                        value={this.props.price}
                        type="number"
                        min="1"
                        step="1"
                        onChange={this.handleprice}
                      />
                      <input
                        placeholder={"dueDate"}
                        value={this.props.dueDate}
                        onChange={this.handledueDate}
                        type="date"
                      />
                      <select>
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
=======
import { DivInput } from "./TelaCadastroStyled";

export default class TelaCadastro extends React.Component{
    state={
        inputTitle: "",
        inputDescription: "",
        inputPrice: "",
        inputPaymentMethods: [],
        inputDueDate: ""
     }
 
    onChangeTitle = (event) => {
        this.setState({ inputTitle: event.target.value });
      };
      onChangeDescription = (event) => {
        this.setState({ inputDescription: event.target.value });
      };
      onChangePrice = (event) => {
        this.setState({ inputPrice: event.target.value });
      };
      onChangePaymentMethods = (event) => {
        this.setState({ inputPaymentMethods: event.target.value });
      };
      onChangeDueDate = (event) => {
        this.setState({ inputDueDate: event.target.value });
      };


      createJob = () => {
        const url = "https://labeninjas.herokuapp.com/jobs";
    
        const body = {
          title: this.state.inputTitle,
          description: this.state.inputDescription,
          price: this.state.inputPrice,
          paymentMethods: this.state.inputPaymentMethods,
          dueDate: this.state.inputDueDate
        };
        axios
          .post(url, body, {
            headers: {
              Authorization: "a09ea8ed-2736-4486-b536-323e3adceb22"
            }
          })
          .then((res) => {
            alert("job cadastrado com sucesso");
            this.setState({
              inputTitle: "",
              inputDescription: "",
              inputPrice: "",
              inputPaymentMethods: "",
              inputDueDate: ""
            });
            console.log(res);
          })
          .catch((err) => {
            alert(err.response.data.message);
            console.log(err);
          });
      };
    
    render(){
        return(
            <DivInput>
            <input
              type={"text"}
              placeholder={"titulo"}
              value={this.state.inputTitle}
              onChange={this.onChangeTitle}
            ></input>
            <input
              type={"text"}
              placeholder={"descrição"}
              value={this.state.inputDescription}
              onChange={this.onChangeDescription}
            ></input>
            <input
              type={"number"}
              placeholder={"preço"}
              value={this.state.inputPrice}
              onChange={this.onChangePrice}
            ></input>
          
                <select
                mode={"multiple"}
                placeholder={"forma de pagamento"}
                value={this.state.inputPaymentMethods}
                onChange={this.onChangePaymentMethods}
                >
                <option dinheiro={"dinheiro"}>Cartão de crédito</option>
                <option>Cartão de debito</option>
                <option>pay pal</option>
                <option>boleto</option>
                <option>pix</option>
                </select>
        
            <input
              type={"date"}
              placeholder={"prazo"}
              value={this.state.inputDueDate}
              onChange={this.onChangeDueDate}
            ></input>
            <button onClick={this.createJob}>Criar trabalho</button>
            <button onClick={this.props.goToPageSearch}>
              ir para página de contrato
            </button>
          </DivInput>

        )
    }

