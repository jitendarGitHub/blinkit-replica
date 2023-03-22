import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, useNavigate } from "react-router-dom";

export default function CategoryNavbar() {
    const navigate = useNavigate()
    return (
        <>
            <Navbar bg="light" expand="lg" className="text-center justify-content-center" style={{ boxShadow: "0px 2px 3px 1px rgba(0,0,0,0.15)", }}>
                <div className=" w-90 " >
                    <Container  >
                        <Navbar.Toggle />
                        <Navbar.Collapse >
                            <Nav className="gap-4 mx-5  navbar-text-size category-item mt-3 "  >
                                <li onClick={() => navigate("/breakfast")}>Dairy and Breakfast </li>
                                <li onClick={() => navigate("/fruits")}>Vegetables & fruits</li>
                                <li onClick={() => navigate("/munchies")}>Munchies</li>
                                <li onClick={() => navigate("/cold-drink")}>Cod Drinks and Jiuces</li>
                                <li onClick={() => navigate("/food")}>Instant & frezen Food</li>
                                <li onClick={() => navigate("/tea")}>Tea,Coffee and Drinks</li>
                                <li onClick={() => navigate("/bakers")}>Bakers and Biscuits</li>
                                <NavDropdown title="More" id="navbarScrollingDropdown" className=" pb-2">
                                    <li onClick={() => navigate("/beauty")}>Beauty and Cosmatic</li>
                                    <li onClick={() => navigate("/sweet")}>   Sweet tooth  </li>
                                    <li onClick={() => navigate("/paan")}>  Pann Corner </li>
                                    <li onClick={() => navigate("/aata")}>  Aata Rise and Daal </li>
                                    <li onClick={() => navigate("/baby-care")}>  Baby Care  </li>
                                    <li onClick={() => navigate("/home-office")}>  Home and Office </li>
                                    <li onClick={() => navigate("/personal-care")}>  Personal Care  </li>
                                    <li onClick={() => navigate("/pet-care")}>Pet Care </li>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </div>
            </Navbar>
            <Outlet />
        </>
    )
}