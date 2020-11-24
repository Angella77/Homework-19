import React, { Component } from 'react';
import Axios from 'axios';
import Table from '../../components/table'
import Navbar from '../../components/navbar'

class App extends Component {
  
  constructor(props){
    super(props);
        this.state = {
            data: [],
            count: 0,
            isLoading: true,
            error: "",
            search: "",
            directionOfSort: "descending"
        };
    this.sortBy = this.sortBy.bind(this);
  }

  componentDidMount() {
      Axios
      .get('https://randomuser.me/api/?seed=employee&results=60&nat=us')
      .then(res => {
          this.setState({
              data: res.data.results, 
              count: res.data.results.length,
              isLoading: false,
              error: ""
          })
      }).catch(err =>{ 
          this.setState({
              isLoading: false,
              error: err.message
          })
      })
  };
