import React, { useEffect, useState } from 'react';

type PaymentProps = {};

export const Payment = ({}: PaymentProps) => {
	const [state, setState] = useState();

	useEffect(() => {}, []);

	return (
		<>
			<h1>React TS FC Component</h1>
			<div>List</div>
		</>
	);
};
