import { useNavigate } from '@reach/router';
import React, { useEffect, useState } from 'react';
import useAsync from '../hooks/useAsync';
import { Button } from '../ui/Button';
import api from '../utils/api';

type NavbarProps = {};

export const Navbar = ({}: NavbarProps) => {
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
