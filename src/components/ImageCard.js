import React from "react";

const ImageCard = ({ image }) => {
	const tags = image.tags.split(",");

	return (
		<div>
			<div className="max-w-sm rounded overflow-hidden shadow-2xl ml-3">
				<img src={image.webformatURL} alt="" className="w-full" />
				<div className="px=6 py-4">
					<div className="font-bold text-black-500 text-xl mb-2 px-2">
						Photo by {image.user}
					</div>
					<ul className="grid grid-cols-3 gap-2">
						<li className="ml-2 flex items-stretch gap-1">
							<i className="far text-blue-500 fa-2x fa-eye"></i>
							<div>{image.views}</div>
						</li>
						<li className="flex items-stretch gap-1">
							<i className="fas text-green-500 fa-2x fa-download"> </i>
							<div>{image.downloads}</div>
						</li>
						<li className="flex items-stretch gap-1">
							<i className="fas text-pink-500 fa-2x fa-heart"></i>
							<div>{image.likes}</div>
						</li>
					</ul>
				</div>
				<div className="px-6 py-4">
					{tags.map((tag, index) => (
						<span
							key={index}
							className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
						>
							#{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default ImageCard;
