import * as React from 'react';
import { ItemStore, ItemExt } from '../store/ItemStore';
import { Button, Card, Accordion, Container, Modal } from 'react-bootstrap';
import { NavBar } from "./NavBar";
import { NewItemComponent } from './NewItemModalPage';

// CSS Import
import '../assets/bootstrap-4.6.css';

interface IMainProps {
  itemStore: ItemStore;
}

export class Main extends React.Component<IMainProps, {}> {

  render () {

    // Elements to show
  
    let elements = this.props.itemStore.getItems(). map( (itemExt: ItemExt) => {
      return <>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={itemExt.item.index+''}>
              { itemExt.item.name }
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={itemExt.item.index+''}>
            <Card.Body>{ itemExt.item.description }</Card.Body>
          </Accordion.Collapse>
        </Card>
      </>
    });
    
    return (
      <>
        <Container className="mt-2">      
          <NavBar />
          
          <NewItemComponent itemStore={this.props.itemStore}  ></NewItemComponent>
  
          <h2> Articles </h2>

          <Accordion>
            { elements }
          </Accordion>
  
        </Container>

      </>
    );
  }

  
} 