import axios from "axios";
import React from "react";

export default class PageDetalhes extends React.Component {
  state = {
    jobsList: []
  };
  componentDidMount() {
    this.getJobById();
  }
  getJobById = (id) => {
    axios
      .get(`https://labeninjas.herokuapp.com/jobs/${id}`, {
        headers: {
          Authorization: "a09ea8ed-2736-4486-b536-323e3adceb22"
        }
      })
      .then((res) => {
        this.setState({ jobsList: res.data.jobs });
        console.log(this.state.jobsList);
        this.getAllJobs();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const getJobs = this.state.jobsList.map((jobs) => (
      <div key={jobs.id}>
        <h1>{jobs.title}</h1>
        <p>Aceita: {jobs.paymentMethods}</p>
        <p>
          Até {jobs.dueDate} por R$ {jobs.price}
        </p>
        <p>{jobs.description}</p>
        <button> Carrinho</button>
       
      </div>
    ));
    return(
        <div>
        {getJobs}
        <button onClick={this.props.goToPageSearch}>voltar para lista</button>
        </div>
    )

  }
}
