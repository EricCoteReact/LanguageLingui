import React from 'react'
import EmployeeApi from '../employeeApi/EmployeeApi';
import EmployeeTable from "./EmployeeTable";
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class Employees extends React.Component{
    constructor(){
        super();
        this.state = {employees: []};
    }

    async componentDidMount(){
        // EmployeeApi.getAllEmployees().
        // then(data => this.setState({employees: data})).
        // catch(err => console.log(err))
        await this.refresh();
    }

    async refresh() {
        try {
            let data = await EmployeeApi.getAllEmployees();
            this.setState({ employees: data });
        }
        catch (err) {
            console.log(err);
        }
    }

    delete = async(empId) => {
        await EmployeeApi.deleteEmployee(empId);
        await this.refresh();
    }


    render() { return (
        <>
            <h1>Employees  </h1>
            <EmployeeTable employees={this.state.employees} 
                           onDelete={this.delete} />
            <Link to="/employee"><Button color="primary">Create Employee</Button></Link>
        </>
      );
    }
}
