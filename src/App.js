import React from 'react'
import { AppContainer } from './components/AppContainer'
import styled from 'styled-components'


const Root = styled.div`
margin: 0;
padding: 0;

`

export default class App extends React.Component{
	render(){
		return(
		<Root>
         <AppContainer/>

		</Root>
	);
}



}
