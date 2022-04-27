import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
// import { Link } from "react-router-dom";
import Card from "./atoms/Card";

function Veggies() {
	const [veggies, setVeggies] = useState([]);

	useEffect(() => {
		getVeggies();
	}, []);

	//this means that this function is asynchronous one.
	//what does it mean for a function to be asychronous?
	const getVeggies = async () => {
		const recipe = localStorage.getItem("Veggies");

		if (recipe) {
			setVeggies(JSON.parse(recipe));
		} else {
			// this calls the fetch function, which fetches data from the url given
			// and stores the data in a variable called api
			//is fetch an asynchronous function?
			//basically what for the data that is to be gotten from the url and store it in the variable 'api'
			const api = await fetch(
				`https://api.spoonacular.com/recipes/random?number=9&apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian`
			);
			//this calls the json method, that converts the data from the url to json format
			//what format was it initially in before being converted to json?
			//convert the data in api to json and store the json format in the variable data
			const data = await api.json();
			console.log(data);
			setVeggies(data.recipes);
			localStorage.setItem("Veggies", JSON.stringify(data.recipes));
		}
	};

	return (
		<Wrapper>
			<h3>Our Vegeterian Picks</h3>

			<Splide
				options={{
					perPage: 3,
					arrows: false,
					pagination: false,
					drag: "free",
					gap: "5rem",
				}}
			>
				{veggies.map((recipe) => {
					return (
						<SplideSlide key={recipe.id}>
							{/* <Card>
								<Link to={"/recipe/" + recipe.id}>
									<p>{recipe.title}</p>
									<img src={recipe.image} alt={recipe.title} />
									<Gradient />
								</Link>
							</Card> */}
							<Card recipe={recipe} />
						</SplideSlide>
					);
				})}
			</Splide>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin: 4rem 0rem;
`;

export default Veggies;
