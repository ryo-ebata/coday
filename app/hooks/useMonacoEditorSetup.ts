import { useState, useEffect } from 'react';
import * as monaco from 'monaco-editor';
import { loader } from '@monaco-editor/react';
import { LOADER_VS_CONFIG_PATH } from '~/config/monaco';
import { MonacoEditorProps } from '~/components/elements/monacoEditor';

type Props = { initialCode: string; test: MonacoEditorProps };

export const useMonacoEditorSetup = ({ initialCode, test }: Props) => {
	const [isClient, setIsClient] = useState(false);
	const [editorValue, setEditorValue] = useState(initialCode);
	const [isAnswered, setIsAnswered] = useState(false);

	useEffect(() => {
		setIsClient(typeof window !== 'undefined');
		loader.config({
			paths: {
				vs: LOADER_VS_CONFIG_PATH,
			},
		});
	}, []);

	const handleEditorDidMount = (
		editor: monaco.editor.IStandaloneCodeEditor,
		monaco: typeof monaco
	) => {
		monaco.editor.setTheme('vs-dark');
	};

	const handleEditorChange = (value: string | undefined) => {
		if (value !== undefined) {
			setEditorValue(value);
		}
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault(); // デフォルトのフォーム送信を防止
		setIsAnswered(true);

		const array = [];

		try {
			for (let i = 1; i < 4; i++) {
				const input = test.test[i].input;
				const output = test.test[i].output;

				const testText = `const n = ${input};\n`;

				const response = await fetch('/post', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ code: testText + editorValue }),
				});

				const result = await response.json();

				if (response.ok) {
					console.log('送信成功:', result);

					if (result.result.error !== '') {
						alert(`エラーが発生しました: ${result.result.stdout}`);
						continue;
					}

					const stdout = result.result.stdout.replace(/\r?\n/g, '');

					if (output === stdout) {
						array.push(1);
					} else {
						array.push(0);
					}
				} else {
					console.error('送信失敗:', result);
				}
			}
		} catch (error) {
			alert(`エラーが発生しました: ${error}`);
		}

		console.log(array);
	};

	return {
		isClient,
		editorValue,
		handleEditorDidMount,
		handleEditorChange,
		handleSubmit,
		isAnswered,
	};
};
