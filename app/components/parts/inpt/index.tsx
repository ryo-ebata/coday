import React from 'react';

type Props = {
	type: 'email' | 'password' | 'hidden';
	name: string;
	autoComplete?: 'current-password';
	required?: boolean;
	value?: string;
};

export const Inpt: React.FC<Props> = ({
	type,
	name,
	autoComplete,
	required = false,
	value,
}) => {
	return (
		<input
			type={type}
			name={name}
			autoComplete={autoComplete}
			required={required}
			value={value}
		/>
	);
};
