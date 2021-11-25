import React from "react";
import PageSearch from "./component/PageSearch/PageSearch";
import TelaCadastro from './component/TelaCadastro';
import PageDetalhes from './component/PageDetalhes/PageDetalhes';




export default class APP extends React.Component {
  state = {
    page: "TelaCadastro"
  };

  selectPage = () => {
    switch (this.state.page) {
      case "TelaCadastro":
        return <TelaCadastro goToPageSearch={this.goToPageSearch} />;
      case "PageSearch":
        return <PageSearch goToTelaCadastro={this.goToTelaCadastro} goToPageDetahes={this.goToPageDetahes}/>;
      case "PageDetalhes":
        return <PageDetalhes goToPageSearch={this.goToPageSearch} />;
      default:
        return <TelaCadastro/>;
    }
  };

  goToTelaCadastro = () => {
    this.setState({ page: "TelaCadastro" });
  };

  goToPageSearch = () => {
    this.setState({ page: "PageSearch" });
  };

  goToPageDetahes = () => {
    this.setState({ page: "PageDetalhes" });
  };

  render() {
    return <div>{this.selectPage()}</div>;
  }
}
