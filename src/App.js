import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ComponentNavbar from './components/Navbar';
import CreateInvoice from './layouts/CreateInvoice';
import Expense from './layouts/Expense';
import Home from './layouts/Home';
import Income from "./layouts/Income";


function App() {
  return (
   	 	<div className="App">
			<ComponentNavbar/>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/createinvoice" element={<CreateInvoice />}></Route>
					<Route path="/income" element={<Income />}></Route>
					<Route path="/expense" element={<Expense />}></Route>
				</Routes>
			</BrowserRouter>
    	</div>
  );
}

export default App;
