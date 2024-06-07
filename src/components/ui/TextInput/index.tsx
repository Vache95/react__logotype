import { ChangeEvent,InputHTMLAttributes,ReactNode } from 'react';
import './styles.scss';



interface TextInputProps extends Omit< InputHTMLAttributes<HTMLInputElement>, 'onChange' > {
   label?:string | ReactNode,
   onChange?:( _val: ChangeEvent<HTMLInputElement> ) => void,
   children?:ReactNode

}

const TextInput:React.FC<TextInputProps> = ({ label, children, onChange = () => null, ...rest }) => (
	<label>
		<input onChange={onChange} {...rest} />
		{!!label && <span>{label}</span>}
		{children}
	</label>
);

export default TextInput;