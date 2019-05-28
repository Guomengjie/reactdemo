import React,{Component} from 'react';
import Url from 'url';
import {Link} from 'react-router-dom'

export default class Hotdetail extends Component{
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	
	render(){
		return(
			<div>
				<button>
				<Link to="/login">关注</Link>
				</button>
			</div>
		)
	}
	
	componentDidMount(){
		console.log(Url.parse(this.props.location.search,true).query)
	}
}
