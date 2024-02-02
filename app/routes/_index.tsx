import type { MetaFunction, ActionFunction } from '@remix-run/node';
// import { HomeTemplate } from '~/components/templates/home';
import { PlayGround } from '~/components/templates/playGround';
import { authenticator } from '~/services/auth/auth.server';

export const meta: MetaFunction = () => {
	return [
		{ title: 'New Remix App' },
		{ name: 'description', content: 'Welcome to Remix!' },
	];
};

export default function Index() {
	return (
		<>
			{/* <HomeTemplate /> */}
			<PlayGround />
		</>
	);
}

export const action: ActionFunction = async ({ request }) => {
	return await authenticator.authenticate('user-login', request, {
		successRedirect: '/success',
		// failureRedirect: '/',
	});
};
