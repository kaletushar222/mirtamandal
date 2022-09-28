import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ComponentNavbar() {
    let pathname = window.location.pathname
    return (
        <>
            <Navbar className="fixed-top" bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        Mitra Mandal
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav activeKey={pathname} className="me-auto">
                            <Nav.Link href="/" >Home</Nav.Link>
                            <Nav.Link href="/createinvoice">Create Invoice</Nav.Link>
                            <Nav.Link href="/income">Income</Nav.Link>
                            <Nav.Link href="/expense">Expense</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default ComponentNavbar;