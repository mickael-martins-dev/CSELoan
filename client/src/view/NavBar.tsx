
import * as React from 'react';
import { Navbar, Button, Nav, Form, FormControl, } from 'react-bootstrap';

export class NavBar extends React.Component<{}, {}> {

    render () {
        return <>
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
        </>
    }
}