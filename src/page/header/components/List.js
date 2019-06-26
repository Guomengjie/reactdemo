import React,{Component,PureComponent} from 'react'
import {
    ListItem,
} from '../style'
import {connect} from 'react-redux'
import {actionCreators} from '../store'

class List extends Component{
    constructor(props){
        console.log('constructor');
        super(props)
        console.log('ccc');
    }
    
    static defaultProps  = {
        color:'red',
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
        console.log(this.props.color);
        const {list,color} = this.props;
        return (
            <div>
                <p>{color}</p>
                {
                    list.map((item,index)=>{
                        return (
                            <ListItem key={index}>{item}</ListItem>
                        )
                    })
                }
            </div>
        )
    }

    componentWillMount(){
        console.log('componentWillMount');
        this.props.getHeaderList();
    }
    componentDidMount(){
        console.log('componentDidMount');
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