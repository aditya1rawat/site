import React, { Component } from 'react';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Articles from './pages/Articles';
import NewStory from './pages/NewStory';
import ForgotPassword from './pages/ForgotPassword';
import ArticleContentPost from './components/article/ArticleContentPost';
import Profile from './components/profile/Profile';
import { DarkMode, Box } from '@chakra-ui/core';

export class App extends Component {
   render() {
      return (
         <Box backgroundColor="#1a202c">
            <DarkMode>
               <Router>
                  <Switch>
                     <Route path="/" exact component={Home} />
                     <Route path="/signup" component={SignUp} />
                     <Route path="/signin" component={SignIn} />
                     <Route path="/about" component={AboutUs} />
                     <Route path="/articles" exact component={Articles} />
                     <Route path="/newstory" component={NewStory} />
                     <Route
                        path="/articles/:docId"
                        exact
                        component={ArticleContentPost}
                     />
                     <Route path="/profile" exact component={Profile} />
                     <Route path="/forgotpassword" component={ForgotPassword} />
                  </Switch>
               </Router>
            </DarkMode>
         </Box>
      );
   }
}

export default App;
