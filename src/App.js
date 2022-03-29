import React from "react";
import Avatar from "./Avatar";
import theSimpson from "./theSimpson";

const App = () => {
	return (
		<div className="App">
			<img src="https://upload.wikimedia.org/wikipedia/commons/9/98/The_Simpsons_yellow_logo.svg" />
			<div className="family">
				{theSimpson.map((person, id) => (
					<Avatar key={id} {...person} />
				))}
			</div>
		</div>
	);
};

export default App;
