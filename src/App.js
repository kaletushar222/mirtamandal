import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ComponentNavbar from './components/Navbar';
import ExpenseContainer from "./containers/expenseContainer";
import IncomeContainer from "./containers/incomeContainer";
import Home from './layouts/Home';
import Login from './layouts/Login';
import Registration from "./layouts/Registration";
import CreateExpense from './layouts/expense/CreateExpense';
import CreateInvoice from './layouts/income/CreateInvoice';

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
					<Route path="/mitramandal/createexpense" element={<CreateExpense />}></Route>
					<Route path="/mitramandal/expense" element={<ExpenseContainer />}></Route>
				</Routes>
			</BrowserRouter>
    	</div>
  	);
}

export default App;
