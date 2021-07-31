import React from 'react';
import { VideoPlayer } from '../components/VideoPlayer';

type DashboardProps = {};

export const Dashboard = ({}: DashboardProps) => {
	return (
		<>
			<h1>React TS FC Component</h1>
			<div>List</div>
			<VideoPlayer url="https://youtu.be/zg9ih6SVACc" />
		</>
	);
};
