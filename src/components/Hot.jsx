import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom'
import Hotdetail from './Hotdetail.jsx'
import Hotanother from './Hotanother.jsx'

export default class Hot extends Component{
	constructor(props){
		super(props);
		this.state = {
			list:[
				{id:'001',title:'标题1',},
				{id:'002',title:'标题2',},
				{id:'003',title:'标题3',},
				{id:'004',title:'标题4',},
			]
		}
	}
	
	render(){
		return(
			<div>
				<ul>
					{this.state.list.map((item,index)=>{
						return(
							
							<li key={index}>
							<Link to={`/hotdetail?id=${item.id}`}>
							{item.title}
							</Link>
							</li>
						)
					})}
				</ul>
				<button>
					<Link to="/hot/">主面板</Link>
				</button>
				<button>
					<Link to="/hot/another">另一个面板</Link>
				</button>
				<Route path={`${this.props.location.pathname}/`} exact component={Hotdetail}/>
				<Route path={`${this.props.location.pathname}/another`} component={Hotanother}/>
			</div>
		)
	}
	
	componentDidMount(){
		console.log(this.props)
	}
	
	_conthis(){
		console.log(this)
	}
}
