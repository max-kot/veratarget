export const Logo = ({ className, href }) => {
	return (
		<a className={className ? 'logo' + ' ' + className : 'logo'} href={href}>
			VeraTarget
		</a>
	)
};