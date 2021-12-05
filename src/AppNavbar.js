import { Button, Container, Nav } from 'react-bootstrap'
import { Navbar, Form, FormControl } from 'react-bootstrap'
import useSearch from "./useSearch";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';

function to_url(query) {
  let encoded_query=encodeURI(query);
  let url=`https://api.spoonacular.com/recipes/complexSearch?apiKey=145e78a54cd247a3aa402896abfbbc1a&addRecipeInformation=true&addRecipeNutrition=true&query=${encoded_query}&number=1`;
  return url;
}

const AppNavbar = ({changeRecipe=f=>f}) => {
  let [searchProps, resetSearch] = useSearch("");
  let [Searched, setSearched] = useState(false);
  const history = useHistory();


  const searchSubmit = (event) => {
    event.preventDefault();
    axios
    .get(to_url(searchProps.value))
    .then((results)=>{
      changeRecipe(results);
    })
    .catch((error)=>{
      alert(`Error occurred with request: ${error}`)
    })
    setSearched(true);
    history.push("https://davidbakerrobinson.github.io/FrontEnd-Final/#/recipe");
    resetSearch();
  }

  return (
    <Navbar className="border p3">
      <Container>
        <Navbar.Brand href="https://davidbakerrobinson.github.io/FrontEnd-Final/#/">
          <h2>Food Nutrition</h2>
        </Navbar.Brand>
        <Nav.Link href="https://davidbakerrobinson.github.io/FrontEnd-Final/#/macro-calculator"><Button>Macro Calculator</Button></Nav.Link>
        <Form className="d-flex" onSubmit={searchSubmit}>
          <FormControl
          {...searchProps} 
          type="search" 
          aria-label="Search"
          placeholder="Search"
          />
          <Button type="submit" variant="outline-success">Search</Button>
        </Form>
      </Container>
      {/* {Searched && <Redirect to="/recipe" />} */}
    </Navbar>
  );
}

export default AppNavbar;