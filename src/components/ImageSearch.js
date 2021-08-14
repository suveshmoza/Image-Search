import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
	const [text, setText] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		searchText(text);
	};

	return (
		<div className="max-w-sm rounded oveflow-hidden my-10 mx-auto">
			<form onSubmit={onSubmit} className="w-full max-w-sm">
				<div className="bg-white flex items-center rounded-full shadow-xl">
					<input
						onChange={(e) => setText(e.target.value)}
						className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
						id="search"
						type="text"
						placeholder="Search"
					/>
					<button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
						<i className="fas fa-search"></i>
					</button>
				</div>
			</form>
		</div>
	);
};
export default ImageSearch;
