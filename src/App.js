import React from "react";
import PageSearch from "./component/PageSearch/PageSearch";
import TelaCadastro from './component/TelaCadastro';
import PageDetalhes from './component/PageDetalhes/PageDetalhes';
import HomePage from "./component/HomePage/HomePage";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";



export default class APP extends React.Component {
  state = {
    page: "HomePage"
  };

  selectPage = () => {
    switch (this.state.page) {
      case "TelaCadastro":
        return <TelaCadastro goToPageSearch={this.goToPageSearch} />;
      case "PageSearch":
        return <PageSearch goToTelaCadastro={this.goToTelaCadastro} goToPageDetahes={this.goToPageDetahes}/>;
      case "PageDetalhes":
        return <PageDetalhes goToPageSearch={this.goToPageSearch} />;
	   case "HomePage":
        return <HomePage  goToTelaCadastro={this.goToTelaCadastro} goToPageSearch={this.goToPageSearch}/>;
      default:
        return <TelaCadastro/>;
    }
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

  render() {
    return( 
	    <div> 
		<Header goToTelaHome={this.goToTelaHome}/>
		{this.selectPage()}
		<Footer/>
		</div>
	)
  }
}
