import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

type VideoPlayerProps = {
	url: string;
};

export const VideoPlayer = ({ url }: VideoPlayerProps) => {
	// const [state, setState] = useState();

	// useEffect(() => {}, []);

	return (
		<>
			<YouTube videoId={'zg9ih6SVACc'} />
		</>
	);
};
