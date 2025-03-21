export const Heading = ({ className, title, children, hasIcon = false }) => {
	const icon = <span className="heading__icon"><svg width="320" height="32" viewBox="0 0 320 32" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g>
			<path d="M323 13L318.314 8.31374C312.065 2.06535 301.935 2.06535 295.686 8.31374L286.314 17.6863C280.065 23.9347 269.935 23.9347 263.686 17.6863L254.314 8.31372C248.065 2.06534 237.935 2.06534 231.686 8.31373L222.314 17.6863C216.065 23.9347 205.935 23.9347 199.686 17.6863L190.314 8.31372C184.065 2.06533 173.935 2.06534 167.686 8.31373L158.314 17.6863C152.065 23.9347 141.935 23.9347 135.686 17.6863L126.314 8.31371C120.065 2.06532 109.935 2.06533 103.686 8.31372L94.3137 17.6863C88.0653 23.9347 77.9347 23.9347 71.6863 17.6863L62.3137 8.31371C56.0653 2.06532 45.9347 2.06533 39.6863 8.31372L30.3137 17.6863C24.0653 23.9347 13.9347 23.9347 7.68629 17.6863L3 13" stroke="#FFD43B" stroke-width="6">
				<animateTransform attributeName="transform" type="translate" from="0 0" to="-256 0" dur="8s" repeatCount="indefinite" />
			</path>
			<path d="M323 13L318.314 8.31374C312.065 2.06535 301.935 2.06535 295.686 8.31374L286.314 17.6863C280.065 23.9347 269.935 23.9347 263.686 17.6863L254.314 8.31372C248.065 2.06534 237.935 2.06534 231.686 8.31373L222.314 17.6863C216.065 23.9347 205.935 23.9347 199.686 17.6863L190.314 8.31372C184.065 2.06533 173.935 2.06534 167.686 8.31373L158.314 17.6863C152.065 23.9347 141.935 23.9347 135.686 17.6863L126.314 8.31371C120.065 2.06532 109.935 2.06533 103.686 8.31372L94.3137 17.6863C88.0653 23.9347 77.9347 23.9347 71.6863 17.6863L62.3137 8.31371C56.0653 2.06532 45.9347 2.06533 39.6863 8.31372L30.3137 17.6863C24.0653 23.9347 13.9347 23.9347 7.68629 17.6863L3 13" stroke="#FFD43B" stroke-width="6">
				<animateTransform attributeName="transform" type="translate" from="256 0" to="0 0" dur="8s" repeatCount="indefinite" />
			</path>
		</g>
	</svg></span>;
	return (
		<div className={className ? "heading " + className : "heading"}>
			<h3 className="heading__title title-2">{title}{hasIcon && icon}</h3>
			<p className="heading__description">{children}</p>
			
		</div>
	)
};