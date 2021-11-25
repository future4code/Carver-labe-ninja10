import axios from "axios";
import React from "react";

export default class PageSearch extends React.Component {
  state = {
    jobsList: [],
    minPrice: "",
    maxPrice: "",

    query: "",

    filterName: "",
    ordem: "todos"
  };

  componentDidMount() {
    this.getAllJobs();
  }

  getAllJobs = () => {
    axios
      .get("https://labeninjas.herokuapp.com/jobs", {
        headers: {
          Authorization: "a09ea8ed-2736-4486-b536-323e3adceb22"
        }
      })

      .then((res) => {
        this.setState({ jobsList: res.data.jobs });
        console.log(this.state.jobsList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  ////funções do filtro/////

  onChangeFiltroMin = (event) => {
    this.setState({ minPrice: event.target.value });
  };

  onChangeFiltroMax = (event) => {
    this.setState({ maxPrice: event.target.value });
  };

  render() {
    const getJobs = this.state.jobsList.map((jobs) => (
      <div key={jobs.id}>
        <h1>{jobs.title}</h1>
        <p>
          Até {jobs.dueDate} por R$ {jobs.price},00
        </p>
        <button onClick={this.props.goToPageDetahes}>ver detalhes</button>
        <button>Adicionar ao Carrinho</button>
      </div>
    ));
    return (
      <div>
        <input type="text" placeholder={"Pesquisar"} />
        <select>
          <option value="">Todos </option>
          <option
            value="maxPrice"
            value={this.state.maxPrice}
            onChange={this.onChangeFiltroMax}
          >
            Maior preço
          </option>
          <option
            value="minPrice"
            value={this.state.minPrice}
            onChange={this.onChangeFiltroMin}
          >
            Menor preço
          </option>
          <option value="titleFilter">Título</option>
          <option value=""> Prazo</option>
        </select>

        <input type="number" min="0" placeholder={"min price"} />
        <input type="number" min="0" placeholder={"max price"} />

        <button onClick={this.props.goToTelaCadastro}>
          ir para tela cadastro
        </button>
        {getJobs}
      </div>
    );
  }
}
