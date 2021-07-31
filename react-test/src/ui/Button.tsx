import React, { useEffect, useState } from 'react';

type ButtonProps = {
	children: any;
	type: any;
};

export const Button = ({ children, ...props }: ButtonProps) => {
	return (
		<>
			<button className="btn btn-primary" {...props}>
				{children}
			</button>
		</>
	);
};
