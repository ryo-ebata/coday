import { json } from '@remix-run/node'; // Remix v1.3.0以降
import type { ActionFunction } from '@remix-run/node'; // Remix v1.3.0以降
import { runCode } from '~/services/glod/post.server';

export const action: ActionFunction = async ({ request }) => {
	// JSONデータを受け取るように変更
	const requestBody = await request.json();
	const code = requestBody.code;

	try {
		const result = await runCode(code);
		console.log(result); // ここで結果をログ出力
		return json({ success: true, result });
	} catch (error) {
		return json(
			{ success: false, error: 'Failed to run code' },
			{ status: 500 }
		);
	}
};
