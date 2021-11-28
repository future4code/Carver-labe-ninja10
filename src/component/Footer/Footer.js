
import React, { Component } from 'react'
import styled from 'styled-components'

const ContainerFooter = styled.div`
margin-botom: 0px;

>h2{
    color: grey;
    margin-left: 50px;
  }
  


`

export default class Footer extends React.Component {
  

    render() {
      return (
      
        <ContainerFooter>
        <hr/>
        <h2>LABENINJAS</h2>
        </ContainerFooter>
  
    )
  }
}


