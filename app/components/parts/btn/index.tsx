import React from 'react';

type Props = {
	children: React.ReactNode;
};

export const Btn: React.FC<Props> = ({ children }) => {
	return <button>{children}</button>;
};
