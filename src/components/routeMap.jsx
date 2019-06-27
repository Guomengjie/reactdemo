import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom'
import App from '../App'
import Hotdetail from './Hotdetail'
import Hot from './Hot'

class RouteMap extends Component{
    constructor(props){
        super(props)
    }

    updateHandle(){
        console.log('更新了');
        
    }

    render(){
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path="/" component={App}>
                    <Route path="detail" component={Hotdetail}></Route>
                    <Route path="hot" component={Hot}></Route>
                </Route>
            </Router>
        )
    }

    componentDidMount(){
        
    }
}
export default RouteMap;