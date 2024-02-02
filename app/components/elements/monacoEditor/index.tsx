import React, { Suspense } from 'react';
import Editor from '@monaco-editor/react';
import { useMonacoEditorSetup } from '~/hooks/useMonacoEditorSetup';
import { Inpt } from '~/components/parts/inpt';

export type Test = {
	input: string;
	output: string;
};

export type MonacoEditorProps = {
	test: Record<number, Test>;
};

export const MonacoEditor: React.FC<MonacoEditorProps> = (test) => {
	const initialCode = '// ここにTypeScriptのコードを書いてください';

	const {
		isClient,
		editorValue,
		handleEditorDidMount,
		handleEditorChange,
		handleSubmit,
		isAnswered,
	} = useMonacoEditorSetup({ initialCode, test });

	return (
		<>
			{isClient && (
				<Suspense fallback={<div>Loading Editor...</div>}>
					<form onSubmit={handleSubmit}>
						<Editor
							width={'50vw'}
							height={'100%'}
							defaultLanguage="javascript"
							defaultValue={editorValue}
							options={{
								automaticLayout: true,
							}}
							onMount={handleEditorDidMount}
							onChange={handleEditorChange}
						/>
						<Inpt type="hidden" name="code" value={editorValue} />
						{isAnswered ? (
							<div
								style={{
									position: 'absolute',
									bottom: '10px',
									left: '10px',
									mixBlendMode: 'difference',
								}}
							>
								Your Answer Sending...
							</div>
						) : (
							<button
								style={{
									position: 'absolute',
									bottom: '10px',
									left: '10px',
								}}
								type="submit"
							>
								送信
							</button>
						)}
					</form>
				</Suspense>
			)}
		</>
	);
};
