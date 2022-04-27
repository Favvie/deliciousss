import styled from "styled-components";
import { Link } from "react-router-dom";

function Card({ recipe }) {
	return (
		<StyledCard>
			<Link to={"/recipe/" + recipe.id}>
				<p>{recipe.title}</p>
				<img src={recipe.image} alt={recipe.title} />
				<Gradient />
			</Link>
		</StyledCard>
	);
}

const StyledCard = styled.div`
	min-height: 15rem;
	border-radius: 2rem;
	overflow: hidden;
	position: relative;

	img {
		border-radius: 2rem;
		position: absolute;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	p {
		position: absolute;
		z-index: 10;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		left: 50%;
		color: white;
		font-size: 1rem;
		font-weight: 600;
		transform: translate(-50%, 0%);
		bottom: 10%;
		width: 100%;
		heigth: 40%;
	}
`;

const Gradient = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 3;
	background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Card;
