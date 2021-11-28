import  React from "react"
import Axios from "axios"

export default class TelaCadastro extends React.Component{
    state={
        title:"",
        description:"",
        price:"",
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
    // fazerCadastro=()=>{
    //     const url=
    //     const body={
    //         title: this.state.title,
    //         description: this.state.description
  
    //     }

        // axios.post(url,body, {
        //     headers: {
        //         Authorization: 
        //     }
        // })
        // .then((res) => {
        //     alert ("usuario (a) cadastrado com sucesso ") 
        // })
        // .catch((err)=>{
        //     alert("erro ao criar usuario ");
        // })

    
    render(){
        return(
            <div>
                <h2>Cadastro</h2>
                <input 
                placeholder={"title"}
                value={this.state.title}
                onChange={this.handletitle}/>
                <input 
                placeholder={"description"}
                value={this.state.description}
                onChange={this.handledescription}/>
                <input 
                placeholder={"price"}
                value={this.state.price}
                onChange={this.handleprice}
                />
                <button>Cadastrar</button>
                <button onClick={this.props.goToPageSearch}>ir para tela de filtros</button>

                 </div>

        )
    }
}