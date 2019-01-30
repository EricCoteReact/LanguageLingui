import React, {lazy, Suspense} from 'react';
import Counter from './counter/Counter';
import { Container } from 'reactstrap';
import Menu from './Menu';
import Footer from './Footer';
import Home from './home/Home';
import './custom.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Employees from './employee/Employees';
import EmployeeDetails from './employee/EmployeeDetails';
import NotFound from './404';
import Todos from './todosState/Todos';
import Clock from './clock/Clock';
import About from './about/About';


//npm install node-sass bootstrap reactstrap
//npm install react-icons 
//npm install redux react-redux redux-thunk redux-logger

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <>
                    <Menu />
                    <Container>
                       <Suspense fallback={<div>Loading...</div>}   >
                            <Switch>
                                <Route path='/' exact component={Home} />
                                <Route path='/about' component={About} />
                                <Route path='/counter'
                                    render={() => <Counter init="35" />} />
                                <Route path='/employees'
                                    component={Employees} />
                                <Route exact path="/employee"
                                    component={EmployeeDetails} />
                                <Route path='/employee/:id'
                                    component={EmployeeDetails} />
                                <Route path="/todos" component={Todos} />
                                <Route path="/clock" component={Clock} />
                                <Route component={NotFound} />
                            </Switch>
                        </Suspense>
                        <Footer />
                    </Container>
                </>
            </BrowserRouter>
        );
    }
}
