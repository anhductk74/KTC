import styles from './contact.module.css';

type ContactProps = {
    avatar?: string;
    name?: string;
    job?: string;
    rightIcon?: React.ReactNode;
}

const Contact = ({ avatar, name, job, rightIcon }: ContactProps) => {
    return (
        <div >
            <div className={styles.row}>
                <div className={styles.rowItem}>
                    <div className={styles.infor}>
                        <img src={avatar} alt="" />
                        <div >
                            <p>{name}</p>
                            <p className={styles.job}>{job}</p>
                        </div>
                    </div>
                    <span>{rightIcon}</span>
                </div>
            </div>

        </div>
    );
}

export default Contact;
