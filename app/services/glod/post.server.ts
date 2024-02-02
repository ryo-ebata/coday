// app/services/glod/glotService.ts
import fetch from 'node-fetch';

const GLOT_API_URL = 'https://glot.io/api/run/typescript/latest';
const GLOT_API_TOKEN = '59c3680c-9ee8-4689-ab47-449e31f022a0'; // あなたのGlot APIトークンをここに設定

type GlotResponse = {
	stdout: string;
	stderr: string;
	error: string;
};

export async function runCode(code: string): Promise<GlotResponse> {
	try {
		const response = await fetch(GLOT_API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token ${GLOT_API_TOKEN}`,
			},
			body: JSON.stringify({
				files: [
					{
						name: 'main.ts',
						content: code,
					},
				],
			}),
		});

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		return (await response.json()) as GlotResponse;
	} catch (error) {
		console.error('Error sending code to Glot:', error);
		throw error;
	}
}
