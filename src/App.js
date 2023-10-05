import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ComponentNavbar from './components/Navbar';
import CounterContainer from './containers/counterContainer';
import IncomeContainer from "./containers/incomeContainer";
import CreateInvoice from './layouts/CreateInvoice';
import Expense from './layouts/Expense';
import Home from './layouts/Home';
import Registration from "./layouts/Registration";
import Login from './layouts/Login';

function App() {
  	return (
   	 	<div className="App">
			<ComponentNavbar/>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/mitramandal" element={<Home />}></Route>
					<Route path="/mitramandal/login" element={<Login/> }></Route>
					<Route path="/mitramandal/register" element={<Registration />}></Route>
					<Route path="/mitramandal/createinvoice" element={<CreateInvoice />}></Route>
					<Route path="/mitramandal/income" element={<IncomeContainer />}></Route>
					<Route path="/mitramandal/expense" element={<Expense />}></Route>
					<Route path="/mitramandal/counter" element={<CounterContainer/> }></Route>
				</Routes>
			</BrowserRouter>
    	</div>
  	);
}

export default App;
