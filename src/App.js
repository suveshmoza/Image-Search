import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [term, setTerm] = useState("");

	useEffect(() => {
		const fetchImages = async () => {
			const { data } = await axios.get("https://pixabay.com/api/", {
				params: {
					key: process.env.REACT_APP_PIXABAY_API_KEY,
					q: term,
				},
			});
			console.log(data);
			setImages(data.hits);
			setIsLoading(false);
		};
		fetchImages();
	}, [term]);

	return (
		<div className="container mx-auto">
			<ImageSearch searchText={(text) => setTerm(text)} />
			{!isLoading && images.length === 0 && (
				<h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>
			)}
			{isLoading ? (
				<h1 className="text-6xl text-center mx-auto mt-32">Search</h1>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
					{images.map((image) => (
						<ImageCard key={image.id} image={image} />
					))}
				</div>
			)}
		</div>
	);
}

export default App;
