import axios from "axios";
import React from "react";
import { DivCard } from "./StyledPageSearch";
import { DivPai } from "./StyledPageSearch";


export default class PageSearch extends React.Component {
    state = {
        JobsList: [],
        minPrice: '',
        maxPrice: '',
        filterName: '',
        order: "minPrice",
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
                this.setState({ JobsList: res.data.jobs });
                console.log(this.state.JobsList);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    ////funções do filtro/////

    orderSelect = () => {
        const orderSelect = this.state.JobsList.sort((a, b) =>
            this.state.order === "minPrice" ? a.price - b.price : b.price - a.price
        );
        return orderSelect;
    };
    


  onChangeFilter = (event) => {
    this.setState({ order: event.target.value });
  };
  
    onChangeFilterName = (event) => {
        this.setState({ filterName: event.target.value})
       

    }

    onChangeMinPrice = (event) => {
        this.setState({
            minPrice: event.target.value
        })
    }

    onChangeMaxPrice = (event) => {
        this.setState({
            maxPrice: event.target.value
        })
    }

    limparFiltro = () => {
        this.setState({
          minPrice: "",
          maxPrice: "",
          filterName: ""
        });
      };

    filtroJobs = (min, max, text) => {
        let filtragemPorValor;
        if (min || max) {
            filtragemPorValor = this.state.JobsList.filter((jobs) => {
                if (min && !max) {
                    return jobs.price >= min;
                } else if (!min && max) {
                    return jobs.price <= max;
                } else if (min && max) {
                    return jobs.price >= min && jobs.price <= max;
                }
            });
        } else
         {filtragemPorValor = this.state.JobsList;}
        let filtragemCompleta;
        if (text) {
            filtragemCompleta = filtragemPorValor.filter((jobs) => {
                return jobs.title.toLowerCase().includes(`${text.toLowerCase()}`);
            });
         } else 
         {filtragemCompleta = filtragemPorValor;}
        return filtragemCompleta;
    };

    render() {
        this.orderSelect();
        const filtroArrayJobs = this.filtroJobs(
            this.state.minPrice,
            this.state.maxPrice,
            this.state.filterName
        );
        const getJobs = this.state.JobsList.map((jobs) => (
            <DivCard key={jobs.id}>
                <h1>{jobs.title}</h1>
                <p> Até {jobs.dueDate} por R$ {jobs.price},00</p>
                <div>
                <button onClick={this.props.goToPageDetahes}>ver detalhes</button>
                <button>Adicionar ao Carrinho</button>
                </div>
                
            </DivCard>
          
        ));
        return (
            <div>
                <input type="text" placeholder={"Pesquisar pelo nome"} value={this.state.filterName} onChange={this.onChangeFilterName}/>
                <select onChange={this.onChangeFilter}>
                    <option value="maxPrice"> Maior preço</option>
                    <option value="minPrice" >Menor preço </option>
                    <option value="titleFilter">Título</option>
                    <option value="data"> Prazo</option>
                </select>
                <input type="number" min="0" placeholder={"min price"} value={this.state.minPrice} onChange={this.onChangeMinPrice}/>
                <input type="number" min="0" placeholder={"max price"} value={this.state.maxPrice} onChange={this.onChangeMaxPrice}  />
                <button onClick={this.limparFiltro}>Limpar</button>
                <p>{filtroArrayJobs.length} encontrados</p>
                <button onClick={this.props.goToTelaCadastro}> ir para tela cadastro  </button>
                <DivPai>
                {getJobs}
                </DivPai>
               
            </div>
        );
    }
}
