import React from 'react';
import Routes from "./routes";
import { BrowserRouter, Route,Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import About from './pages/About'
import Course from './pages/Course';
import Module from './pages/Module';
import Login from './pages/Login';
import Register from './pages/Register';

import Home from './pages/admin/Home';
import ModuleAdmin from './pages/admin/ModuleAdmin';
import CourseAdmin from './pages/admin/CourseAdmin'


export default function App() {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path='/' component={HomePage} /> 
            <Route path='/sobre' component={About} /> 
            <Route path='/cursos' component={Course} /> 
            <Route path='/module' component={Module} /> 
            <Route path='/login' component={Login} /> 
            <Route path='/register' component={Register} />

            <Route exact path="/dashboard" component={Home} />
            <Route path="/dashboard/module" component={ModuleAdmin} />
            <Route path="/dashboard/course" component={CourseAdmin} />                           
         </Switch>
      </BrowserRouter>
   );
  
  }