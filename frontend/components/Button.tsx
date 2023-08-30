interface ButtonProps {
	type: 'submit' | 'reset' | 'button'
	text: string
	disabled: boolean
	onClick?: any
	className?: string
}

const Button = ({ type, text, disabled, onClick, className }: ButtonProps) => {
	return (
		<button
			type={type}
			disabled={disabled}
			className={`relative flex h-11 w-max items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 ${className}}`}
			onClick={onClick}
		>
			<span className="relative text-base font-semibold text-white dark:text-dark">{text}</span>
		</button>
	)
}

export default Button
