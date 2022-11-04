import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ComponentNavbar from './components/Navbar';
import CreateInvoice from './layouts/CreateInvoice';
import Expense from './layouts/Expense';
import Home from './layouts/Home';
import GroupRegistation from './layouts/GroupRegistration';
import CounterContainer from './containers/counterContainer'
import IncomeContainer from "./containers/incomeContainer";

function App() {
  return (
   	 	<div className="App">
			<ComponentNavbar/>
			<div className="custom-container">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/register" element={<GroupRegistation />}></Route>
						<Route path="/createinvoice" element={<CreateInvoice />}></Route>
						<Route path="/income" element={<IncomeContainer />}></Route>
						<Route path="/expense" element={<Expense />}></Route>
						<Route path="/counter" element={<CounterContainer/> }></Route>
					</Routes>
				</BrowserRouter>
			</div>
    	</div>
  );
}

export default App;
