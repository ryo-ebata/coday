import { Form } from '@remix-run/react';
import React from 'react';
import { Btn } from '~/components/parts/btn';
import { Inpt } from '~/components/parts/inpt';

export const HomeTemplate: React.FC = () => {
	return (
		<Form method="post">
			<Inpt type="email" name="email" required />
			<Inpt
				type="password"
				name="password"
				autoComplete="current-password"
				required
			/>
			<Btn>Sign In</Btn>
		</Form>
	);
};
