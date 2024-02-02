import { MonacoEditor } from '~/components/elements/monacoEditor';
import { Question } from '~/components/elements/question';

export const PlayGround: React.FC = () => {
	const question = {
		1: {
			text: '数列Aがあります。Aの要素のうち、偶数もしくは3の倍数の要素の合計を求めてください。',
			test: {
				1: {
					input: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]',
					output: '6',
				},
				2: {
					input: '[4, 7, 2, 4, 8]',
					output: '3',
				},
				3: {
					input: '[100, 103, 106, 109, 112, 115]',
					output: '3',
				},
			},
		},
		2: {
			text: '文字列Sが与えられます。Sの中で最も多く出現する文字Pとその出現回数Nを求めてください。\n出力形式は(P, N)の形ですること。',
			test: {
				1: {
					input: 'Hello, World!',
					output: 'l, 3',
				},
				2: {
					input: 'こんにちは、ここは日本です。',
					output: 'こ, 3',
				},
				3: {
					input: '私はいつも通り元気です。Davis先生はいかがでしょうか。',
					output: 'で, 2',
				},
			},
		},
		3: {
			text: '整数Nが与えられます。1からNまでの整数のうち、素数のみを足し合わせた合計を求めてください。',
			test: {
				1: {
					input: '4',
					output: '6',
				},
				2: {
					input: '20',
					output: '77',
				},
				3: {
					input: '1',
					output: '1',
				},
			},
		},
	};

	const text = question[3].text;
	const test = question[3].test;

	return (
		<div
			style={{
				position: 'fixed',
				display: 'flex',
				height: '90vh',
				overflow: 'scroll',
				bottom: 0,
			}}
		>
			<Question text={text} />
			<MonacoEditor test={test} />
		</div>
	);
};
