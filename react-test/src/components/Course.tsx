import { Link } from '@reach/router';
import React, { useEffect, useState } from 'react';

type CourseProps = {
	course: Course;
};

export interface Course {
	id: string;
	title: string;
	thumbnailURL: string;
	price: string;
}

export const Course = ({ course }: CourseProps) => {
	const [state, setState] = useState();

	useEffect(() => {}, []);

	return (
		<>
			<div className="card" style={{ width: '18rem' }}>
				<img
					className="card-img-top"
					src={course.thumbnailURL}
					alt={course.title}
				/>
				<div className="card-body">
					<h5 className="card-title">{course.title}</h5>
					<p className="card-text">{course.price}</p>
					<nav>
						<Link className="btn btn-primary" to="/payment">
							Buy
						</Link>
					</nav>
				</div>
			</div>
		</>
	);
};
