import { LoaderFunction } from '@remix-run/node';
import { authenticator } from '~/services/auth/auth.server';

export const loader: LoaderFunction = async ({ request }) => {
	return await authenticator.isAuthenticated(request, {
		failureRedirect: '/',
	});
};

export default function SuccessIndex() {
	return (
		<>
			<div>ログイン成功しました。</div>
			<div>
				<form action="/logout" method="post">
					<button type="submit">サインアウト</button>
				</form>
			</div>
		</>
	);
}
