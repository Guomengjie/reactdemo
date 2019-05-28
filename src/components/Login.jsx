import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';

export default class Login extends Component{
	constructor(props){
		super(props);
		this.state = {
			loginFlag:false,
		}
	}
	
	render(){
		if(this.state.loginFlag){
			return <Redirect to="/hot" />
		}
		return(
			<div>
				登录板块
				<br/>
				<form onSubmit={(e)=>this._dealLogin(e)}>
					<input placeholder="请输入用户名" ref="username"/>
					<input type="submit" value="登录" />
				</form>
				
			</div>
		)
	}
	
	componentDidMount(){
		
	}
	
	_dealLogin(){
		const username = this.refs.username.value;
		if(username!==''){
			this.setState({
				loginFlag:true,
			})
		}else{
			alert('登录失败')
		}
		console.log(11)
	}
}
