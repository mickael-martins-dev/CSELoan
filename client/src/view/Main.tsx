import * as React from 'react';
import { ItemStore, ItemExt } from '../store/ItemStore';
import { Navbar, Button, Nav, Form, FormControl } from 'react-bootstrap';

// CSS Import
import 'bootstrap/dist/css/bootstrap.min.css';


interface IMainProps {
  itemStore: ItemStore;
}

export default class Main extends React.Component<IMainProps, {}> {

  render () {

    // Elements to show
    
    // let elements = this.props.itemStore.getItems().map( (itemExt: ItemExt) => {
    //   return <h2> {itemExt.item.name} </h2>
    // });
    
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home"> CSE Sercel </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home"> Home </Nav.Link>
            <Nav.Link href="#features"> Contact </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info"> Search </Button>
          </Form>
        </Navbar>

        <div className='container mt-2'>      
          <Button variant="primary">Primary</Button>
        </div>
      </>
    );
  }
}