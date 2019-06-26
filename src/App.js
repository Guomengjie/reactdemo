
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

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        // document.title = `You clicked ${this.state.count} times`;
        console.log(this.getDOMNode());
        
    }

    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>
            </div>
        );
    }
}


function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCount(count + 1); // 这个 effect 依赖于 `count` state
            console.log(count)
        }, 1000);

        return () => clearInterval(id);
    }, [count]); //  Bug: `count` 没有被指定为依赖

    return <h1>{count}</h1>;
}

class Example2 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2:0,
        };
    }

    // componentDidMount() {
    //     document.title = `You clicked ${this.state.count} times`;
    // }


    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <p>{this.state.count2}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>
            </div>
        );
    }


}

const TargetComponent = React.forwardRef((props,ref) => {
   return <input type="text" ref={ref} />
})

class App extends Component{
	constructor(props){
		super(props);
		
//		this.state = store.getState();
		this.state = {
			time:new Date().toLocaleTimeString(),
		};
        this.check = React.createRef();
        this.ref = React.createRef();
	}
	
	render(){
		return (
	  	<Router>
		    <div>
                <TargetComponent ref={this.ref} />
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
				{/*<Counter/>*/}
		      	{
		      		routes.map((item,index)=>{
		      			if(item.exact){
		      				return <Route exact path={item.path} key={index} component={item.component}/>
		      			}else{
		      				return <Route path={item.path} key={index} component={item.component}/>
		      			}
		      		})
		      	}

                {
                    true ? <span>true</span> : <span>false</span>
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
         this.ref.current.value = 'asdf阿撒旦法地方'
          
          
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
