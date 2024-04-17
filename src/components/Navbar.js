import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ComponentNavbar() {
    let pathname = window.location.pathname
    return (
        <>
            <Navbar className="fixed-top" bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/mitramandal">
                        Mitra Mandal
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav activeKey={pathname} className="me-auto">
                            <Nav.Link href="/mitramandal/createinvoice">Create Invoice</Nav.Link>
                            <Nav.Link href="/mitramandal/income">Income</Nav.Link>
                            <Nav.Link href="/mitramandal/createexpense">Create Expense</Nav.Link>
                            <Nav.Link href="/mitramandal/expense">Expense</Nav.Link>
                            <Nav.Link href="/mitramandal/doctracker">Doc Tracker</Nav.Link>
                        </Nav>
                        <Nav style={{ marginLeft: "auto" }}>
                            <Nav.Link href="/mitramandal/login">Login</Nav.Link>
                            <Nav.Link eventKey={2} href="/mitramandal/register">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default ComponentNavbar;