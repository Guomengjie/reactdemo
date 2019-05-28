import React,{Component} from 'react'
import List from './components/List'
import {
    HeaderWrapper,

} from './style'

class Header extends Component{
    render(){
        return (
            <HeaderWrapper>
                <List/>
            </HeaderWrapper>
        )
    }
}

export default Header;