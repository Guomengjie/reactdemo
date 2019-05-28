import React,{Component} from 'react'
import {
    ListItem,
} from '../style'
import {connect} from 'react-redux'
import {actionCreators} from '../store'

class List extends Component{
    constructor(props){
        console.log('constructor');
        super(props)

        const defaultProps  = {
            color:'red',
        }
    }

    // shouldComponentUpdate(parameters){
    //     let {nextProps, nextState} = parameters;
    //     if(this.props.color !== nextProps.color){
    //         return true;
    //     }
    //     if(this.state.count !== nextState.count){
    //         return true;
    //     }
    //
    //     return false;
    // }

    render(){
        console.log('render');
        return (
            <div>
                {
                    this.props.list.map((item,index)=>{
                        return (
                            <ListItem key={index}>{item}</ListItem>
                        )
                    })
                }
            </div>
        )
    }

    componentDidMount(){
        console.log('componentDidMount');
        this.props.getHeaderList();
    }
}

const mapStateToProps = (state) => {
    return {
        list:state.getIn(['header','headerList']),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getHeaderList(){
            dispatch(actionCreators.getHeaderList())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);