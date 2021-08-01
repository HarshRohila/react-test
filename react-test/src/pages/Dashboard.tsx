import React from 'react';
import { Course } from '../components/Course';
import { Loader } from '../components/Loader';
import { VideoPlayer } from '../components/VideoPlayer';
import useAsync from '../hooks/useAsync';

type DashboardProps = {};

export const Dashboard = ({}: DashboardProps) => {
	const { status, value } = useAsync(getCourses);
	return (
		<>
			{status === 'pending' && <Loader />}
			{status === 'success' && <Courses courses={value} />}
		</>
	);
};

async function getCourses() {
	return fetch(
		'https://s3-ap-southeast-1.amazonaws.com/he-public-data/courses26269ff.json'
	).then((res) => res.json());
}

const Courses = ({ courses }: any) => {
	return (
		<>
			{courses.map((course: Course) => (
				<Course key={course.id} course={course} />
			))}
		</>
	);
};
