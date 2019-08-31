import React, {Component} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import Posts from './Posts'


class Routing extends Component{
    render(){
        return(
            <BrowserRouter>
            <div>
            <header>
                <Link to="/" >Home</Link><nbsp></nbsp>
                <Link to="/profile" >Profile</Link><nbsp></nbsp>
                <Link to="/posts" >Posts</Link><nbsp></nbsp>

            </header>
         <Route exact path="/" component={Home}></Route>
         <Route path="/profile" component={Profile}></Route>
         <Route path="/posts" component={Posts}></Route>  
         </div>
    </BrowserRouter>
        )
    }
}

export default Routing;