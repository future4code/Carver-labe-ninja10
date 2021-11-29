
import React from "react";
import PageSearch from "./component/PageSearch/PageSearch";
import TelaCadastro from './component/TelaCadastro';
import PageDetalhes from './component/PageDetalhes/PageDetalhes';
import HomePage from "./component/HomePage/HomePage";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Carrinho from "./component/Carrinho/Carrinho";
import { BotaoCarrinho } from './components/botaoCarrinho'
import { BotaoContratacao } from './components/botaoContratacao'
import "./styled.css"



export default class APP extends React.Component {
  state = {
    page: "HomePage",
    title:"",
    description:"",
    price:"",
  }

  selectPage = () => {
    switch (this.state.page) {
      case "TelaCadastro":
        return <TelaCadastro goToPageSearch={this.goToPageSearch} />;
      case "PageSearch":
        return <PageSearch goToTelaCadastro={this.goToTelaCadastro} goToPageDetahes={this.goToPageDetahes}/>;
      case "PageDetalhes":
        return <PageDetalhes goToPageSearch={this.goToPageSearch} />;
	   case "HomePage":
        return <HomePage goToTelaCadastro={this.goToTelaCadastro} goToPageSearch={this.goToPageSearch}/>;
      case "Carrinho":
          return <Carrinho goToTelaCarrinho={this.goToTelaCarrinho}/>;
      default:
        return <HomePage/>;
    }
  };
  goToTelaCarrinho = () => {
    this.setState({ page: "Carrinho" });
  };
  goToTelaCadastro = () => {
    this.setState({ page: "TelaCadastro" });
  };
  goToTelaHome = () => {
    this.setState({ page: "HomePage" });
  };

  goToPageSearch = () => {
    this.setState({ page: "PageSearch" });
  };

  goToPageDetahes = () => {
    this.setState({ page: "PageDetalhes" });
  };
  handledueDate = (event) => {
    this.setState({ dueDate: event.target.value });
  };
  handletitle = (event) => {
    this.setState({ title: event.target.value });
  };
  handledescription = (event) => {
    this.setState({ description: event.target.value });
  };
  handleprice = (event) => {
    this.setState({ price: event.target.value });
  };
  handlepaymentMethods = (event) => {
    this.setState({ paymentMethods: event.target.value });
  };

  render() {
    return( 
	    <div> 
		<Header goToTelaHome={this.goToTelaHome} goToTelaCarrinho={this.goToTelaCarrinho}/>
		{this.selectPage()}
		<Footer/>
       <BotaoContratacao>
			  <button onClick="contrato">Contratar um ninja</button>
		  </BotaoContratacao>
		  <BotaoCarrinho>
			  <button onClick="carrinho">Adicionar ao carrinho</button>
		  </BotaoCarrinho>
		</div>
	 )
  }
}

