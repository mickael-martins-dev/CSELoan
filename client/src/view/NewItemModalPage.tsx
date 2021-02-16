import * as React from 'react';
import { ItemStore, ItemExt } from '../store/ItemStore';
import { Form, Button, Col, Modal } from 'react-bootstrap';

interface INewItemComponentProps {
    itemStore: ItemStore;
}
  
interface IMainState {
    modal: boolean
}

export class NewItemComponent extends React.Component<INewItemComponentProps, IMainState> {

    constructor(props: INewItemComponentProps){
        super(props);

        this.state = { modal: false }

        this.toggle         = this.toggle.bind(this);
        this.handleClose    = this.handleClose.bind(this);
        this.handleOpen     = this.handleOpen.bind(this);
    }

    toggle(): void { this.setState( {modal: !this.state.modal} ); }
    handleClose(): void { this.setState({modal: false});}
    handleOpen(): void { this.setState({modal: true}); }

    render() {
        return <>
            
            <Button variant="primary" onClick={() => {this.handleOpen();} }> Nouvel article </Button>


            <Modal show={this.state.modal} onHide={this.handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title> Nouvel article </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label> Nom </Form.Label>
                            <Form.Control type="text" placeholder="Nom" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label> Description </Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label> Categorie </Form.Label>
                                <Form.Control as="select" defaultValue="GAMES">
                                    <option> GAMES </option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose} > Fermer </Button>
                    <Button variant="primary" onClick={this.handleClose} > Sauvegarder </Button>
                </Modal.Footer>
            </Modal>
        </>
    }
}
