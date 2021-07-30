import React from 'react';

type InputProps = {
	label: string;
};

export const Input = ({ label }: InputProps) => (
	<>
		{label && (
			<label htmlFor="exampleInputEmail1" className="form-label">
				{label}
			</label>
		)}
		<input
			type="email"
			className="form-control"
			id="exampleInputEmail1"
			aria-describedby="emailHelp"
		/>
	</>
);
