import React, { useEffect, useState } from 'react';

type NavbarProps = {};

export const Navbar = ({}: NavbarProps) => {
	const [state, setState] = useState();

	useEffect(() => {}, []);

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Fullstack Test
					</a>
				</div>
			</nav>
		</>
	);
};
