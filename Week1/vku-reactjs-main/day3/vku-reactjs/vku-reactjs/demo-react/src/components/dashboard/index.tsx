import styles from './Dashboard.module.css';
import { EyeOff } from 'lucide-react';
type DashboardProps = {
    iconright?: React.ReactNode;
    imgleft?: string;
    imgright?: string;
    textCenter?: string;
}

const Dashboard = ({iconright, imgleft, imgright, textCenter}: DashboardProps) => {
    return (
        <div >
            <div className={styles.row}>
                <div className={styles.rowItem}>
                    <span style={{ color: "red" }}>7'</span>
                    <span>{iconright}</span>
                </div>
                <div className={`${styles.rowItem} ${styles.rowItembottom}`}>
                    <span>Spain <img src={imgleft} alt="" /></span>
                    <span>{textCenter}</span>
                    <span><img src={imgright} alt="" /> France</span>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.rowItem}>
                    <span className={styles.customspan}><img src="./images/manchester.png" alt="" />Manchester United</span>
                    <span>{iconright}</span>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.rowItem}>
                    <div className={styles.infor}>
                        <img src="./images/avatar.png" alt="" />
                        <div >
                            <p>Wade Warren</p>
                            <p><span style={{ color: '#1518E0' }}>VISA</span> 4293 3242 <span>••••</span></p>
                        </div>
                    </div>
                    <span><EyeOff /></span>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.rowItem}>
                    <div className={styles.rowtop}>
                        <div className={styles.right}>
                            <span className={styles.highlight}>Hightlight</span>
                            <span className={styles.feeds}>Feeds</span>
                        </div>
                        <div className={styles.left}>
                            <span>{iconright}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.rowItem}>
                    <div className={styles.rowmiddle}>
                        <h3>Dashboard</h3>
                        <p>Business management service</p>
                    </div>
                </div>
                <div className={styles.rowItem}>
                    <div className={styles.rowbottom}>
                        <div className={styles.contaipercent}>
                            <div className={styles.percent}></div>
                        </div>
                        <div className={styles.textpercent}>
                            <span>80%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
