import styles from './InputText.module.css';

type InputTextProps = {
    srcimg?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    placeholder?: string;
    value?: string;
}
const InputText = ({ leftIcon, rightIcon, placeholder, value, srcimg }: InputTextProps) =>{
    return (
        <div className={styles.container}>
            <span></span>{leftIcon}<input type="text" value={value} placeholder={placeholder} />{rightIcon} <img src={srcimg} alt="" />
        </div>
    );
}

export default InputText;
