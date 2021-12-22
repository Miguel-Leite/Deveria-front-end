import React from "react";
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


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" element={HomePage} />
                <Route path="/sobre" element={About} />
                <Route path="/cursos" element={Course} />
                <Route path="/modulos" element={Module} />
                <Route path="/login" element={Login} />
                <Route path="/register" element={Register} />

                <Route path="/dashboard" element={Home} />
                <Route path="/dashboard/module" element={ModuleAdmin} />
                <Route path="/dashboard/course" element={CourseAdmin} />
            </Switch>
        </BrowserRouter>
    )
 }

 export default Routes;