import React, { useEffect, useState } from 'react';

type PaymentProps = {};

export const Payment = ({}: PaymentProps) => {
	const [state, setState] = useState();

	useEffect(() => {}, []);

	return (
		<>
			<h1>Enter Credit Card Details</h1>
		</>
	);
};
