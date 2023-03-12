import React from "react";
import SecondsCounter from "./counter.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="justify-content-center d-flex">
			<SecondsCounter/>
			
		</div>
	);
};

export default Home;
