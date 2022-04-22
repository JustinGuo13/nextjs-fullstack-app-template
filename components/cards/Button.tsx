export interface IButton {
	size: string;
	text: string;
}

const Button: React.FC<IButton> = ({ size, text }) => {
	return (
		<button className={` bg-red-400 font-bold text-white px-6 py-2 ${size} `}>{text}</button>
	);
};

export default Button;
