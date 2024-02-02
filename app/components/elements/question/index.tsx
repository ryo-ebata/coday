type Props = {
	text: string;
};

export const Question: React.FC<Props> = ({ text }) => {
	return (
		<div
			style={{
				width: '50vw',
				height: '100%',
				display: 'flex',
				// justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				padding: '20px',
			}}
		>
			<h2>問題</h2>
			<p>{text}</p>
		</div>
	);
};
