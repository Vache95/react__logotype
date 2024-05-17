import './styles.scss';

const TextInput = ({ label, onChange = () => null, ...rest }) => (
	<label>
		<input onChange={onChange} {...rest} />
		{!!label && <span>{label}</span>}
	</label>
);

export default TextInput;