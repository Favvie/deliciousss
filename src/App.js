import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Nav>
					<GiKnifeFork />
					<Logo to={"/"}>delicioussss</Logo>
				</Nav>
				<Search />
				<Category />
				<Pages />
			</BrowserRouter>
		</div>
	);
}

const Nav = styled.nav`
margin 4rem 0rem;
display:flex;
justify-content: flex-start;
align-items: center;	
svg {
		font-size: 2rem;
	}
`;

const Logo = styled(Link)`
	font-size: 1.5em;
	font-weight: 400;
	text-decoration: none;
	font-family: "Lobster Two", cursive;
`;

export default App;
