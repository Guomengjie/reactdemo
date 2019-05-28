
import React,{Component,useState,useEffect}from 'react';
import Hot from './components/Hot.jsx'
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom'
import Hotdetail from './components/Hotdetail.jsx'
import Login from './components/Login'
import {increment2} from './store/actionCreators'
import {connect} from 'react-redux'
import FlavorForm from './components/test.jsx'
import {Bar,ImgL,GrobalStyle} from './style.js'
import C from './components/C.js'
import Header from './page/header'



const routes = [
	{
		path:'/hot',
		component:Hot,
	},
	{
		path:'/login',
		component:Login,
	},
];




class Example2 extends Component{
    constructor(props){
        super(props);

        this.state = {
            counter:0,
        }

        this.add = this.add.bind(this);
    }

    static defaultProps = {
        increment:1,
    }

    render(){
        return (
            <div>
                <button onClick={this.add}>{this.state.counter}</button>
            </div>
        )
    }


    add(){
        this.setState((state, props) => ({
            counter: state.counter + props.increment
        }));
    }


}

class App extends Component{
	constructor(props){
		super(props);
		
//		this.state = store.getState();
		this.state = {
			time:new Date().toLocaleTimeString(),
		};
		this.check = React.createRef();
	}
	
	render(){
		return (
	  	<Router>
		    <div>
                <GrobalStyle/>
		      	<Link to={{pathname:'/hot'}}>热门板块</Link>
		      	<Link to="/login">登录板块</Link>
		      	<div onClick={this.props.create}>{this.props.num}</div>
		      	<div>{this.state.time}</div>
		      	<FlavorForm />
		      	<Bar className="active">lallla</Bar>
		      	
		      	<input type="text" defaultValue="lalal" />
		      	<input type="checkbox" defaultChecked="checked" ref={this.check}/>
		      	<C left={<div>lalalla</div>}>
		      		
		      		<ImgL></ImgL>
		      	</C>
                <Example2/>
		      	{
		      		routes.map((item,index)=>{
		      			if(item.exact){
		      				return <Route exact path={item.path} key={index} component={item.component}/>
		      			}else{
		      				return <Route path={item.path} key={index} component={item.component}/>
		      			}
		      		})
		      	}

		      	<Header/>

		    </div>
	    </Router>
	  );
	}
	
	
  
//	_handle(){
//		this.setState(store.getState())
//	}
  	
  	componentDidMount(){
  		const _that = this;
  		this.timeId = setInterval(function(){
  			_that.setState({
  				time:new Date().toLocaleTimeString(),
  			})
  		},1000);
  		
  		const bread = ()=>['1','2','3'];
  		let [b,c,d] = bread();
  		
  		console.log(this.check.current.checked)
  	}

    componentWillUnmount(){
  	    clearInterval(this.timeId)
    }
}

const mapStateToProps = (state)=>{
	return {
		num:state.num,
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		create(){
			const action = increment2();
			dispatch(action)
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
