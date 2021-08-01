import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

type LoaderProps = {};

export const Loader = ({}: LoaderProps) => {
	return (
		<>
			<FontAwesomeIcon icon={faSpinner} spin />
		</>
	);
};
