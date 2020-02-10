import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import EmpDetail from "./EmpDetail";
import API from "../utils/API";

class SearchContainer extends Component {
  state = {
    result: [],
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchEmp();
  }

  searchEmp = () => {
    API.search()
      .then(res => this.setState({ result: res.data.results}))
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
    // let res2=[...this.state.result].filter(item =>{return item.name.first.toLowerCase().indexOf( this.state.search)>-1})
    // this.setState({
    //   result:res2
    // })
  };

  // When the form is submitted, search the search API for the value of `this.state.search`
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.searchEmp(this.state.search);
  // };

  render() {
    return (
      <Container>
        <Row>
        <Col size="md-12">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          
          <Col size="md-12">
            <Card
              heading={"Employees:"}
            >
              
              {[...this.state.result].filter(item =>{return item.name.first.toLowerCase().indexOf( this.state.search)>-1}).map((res, index)=><div > <EmpDetail key={index} name={res.name.first +" "+ res.name.last} src={res.picture.thumbnail} director={res.email} age={res.dob.age} phone={res.phone}/> <hr/></div>)}
            
            </Card>
          </Col>
          
        </Row>
      </Container>
    );
  }
}

export default SearchContainer;
