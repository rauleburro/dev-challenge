interface GuardProps {
	children: JSX.Element
}

const Guard = ({ children }: GuardProps) => {
	return <>{children}</>
}

export default Guard
