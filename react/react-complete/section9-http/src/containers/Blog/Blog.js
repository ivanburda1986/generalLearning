import React, { Component } from 'react';
//import axios from 'axios';
//--> to use my axios instance instead of the common axios from the package:

import {Route, NavLink, Switch, Redirect} from 'react-router-dom';


import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    render () {
        return (
            <div className={"Blog"}>
                <header>
                    <nav>
                        <ul>

                            <li><NavLink 
                            to="/posts/" 
                            exact
                            activeClassName="my-active"
                            activeStyle={{
                                color: 'green',
                                textDecoration: 'underline',
                            }}>Posts</NavLink></li>
                            {/* The value of to can be an object within JSX code. In this object we setup the NavLink attributes. It is possible to sertup also a #fragment and query parameters, however, in the example below it is just for a demonstration */}
                            
                            <li><NavLink to={{
                                //An absolute path
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* It is fully OK to: use multiple routes even for the same path; nest routes */}
                {/* <Route path="/" exact render={()=><h1>Home</h1>}/>
                <Route path="/"  render={()=><h1>Home2</h1>}/> */}

                {/* Loading components instead of rendering some JSX right at the spot */}

                {/* Switch is used to make sure only one route gets loaded. If course if a route is kept outside of a Switch, it will always load */}
                <Switch> 
                    <Route path="/new-post" exact component={NewPost}/>
                    <Route path="/posts" component={Posts}/>
                    <Redirect from= "/" to= "/posts"/>
                </Switch>
            </div>
        );
    }
}

export default Blog;