import styles from './myteam.module.css';

type MyTeamProps = {
    avatars: string[];
    name?: string;
    content?: string;
    customtext?: string;
    backgroundColor?: string;
}

const MyTeam = ({avatars = [], name, content, customtext, backgroundColor}: MyTeamProps) => {
    return (
        <div>
            <div style={{backgroundColor: backgroundColor }} className={styles.container}>
                <div className={styles.avatar}>
                    {avatars.map((avatar, index) => (
                        <img key={index} src={avatar} alt={`Team Avatar ${index + 1}`} />
                    ))}
                </div>
                <div className={styles.content}>
                    <p className={`${customtext === 'text1' ?  styles.text1 : styles.text2}`}>{name}</p>
                    <p className={`${customtext === 'text1' ?  styles.text1 : styles.text2} ${styles.content}`}>{content}</p>
                </div>
            </div>
        </div>
    );
}

export default MyTeam;
