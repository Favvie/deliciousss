import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

function Searched() {
	const [searchedRecipes, setSearchedRecipes] = useState([]);

	let params = useParams();

	useEffect(() => {
		getSearched(params.search);
	}, [params.search]);

	const getSearched = async (item) => {
		const api = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?number=9&apiKey=${process.env.REACT_APP_API_KEY}&query=${item}`
		);
		const data = await api.json();
		setSearchedRecipes(data.results);
	};
	return (
		<Grid>
			{searchedRecipes.map((item) => {
				return (
					<Card key={item.id}>
						<Link to={"/recipe/" + item.id}>
							<img src={item.image} alt={item.title} />
							<h4>{item.title}</h4>
						</Link>
					</Card>
				);
			})}
		</Grid>
	);
}

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
	grid-gap: 3rem;
`;
const Card = styled.div`
	img {
		width: 100%;
		border-radius: 2rem;
	}

	a {
		text-decoration: none;
	}

	h4 {
		text-align: center;
		padding: 1rem;
	}
`;

export default Searched;
