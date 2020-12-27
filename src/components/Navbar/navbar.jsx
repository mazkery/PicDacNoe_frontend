import React, { useState, useEffect } from "react";
import "./navbar.css";
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
    Table,
} from "react-bootstrap";

export default function NavBar() {
    return (
        <div>
            <div>
                <Navbar className="Navbar">
                    <Navbar.Brand href="/">PicDacNoe</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/editpassword">EditPassword</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                            />
                            <Button variant="outline-success">Hiiiii</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}