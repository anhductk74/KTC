import styles from './buttontab.module.css'
import React from 'react';


export default function ButtonTabs() {
    const listButtons1 = [
        { label: 'HISTORY', content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.' },
        { label: 'APPROACH', content: 'Contenido de tabNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?' },
        { label: 'CULTURE', content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.' },
        { label: 'METHOD', content: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.' },
    ];
    const listButtons2 = [
        { label: 'HISTORY', content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.' },
        { label: 'APPROACH', content: 'Contenido de tabNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?' },
        { label: 'CULTURE', content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.' },
        { label: 'METHOD', content: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.' },
    ];

    const [activeTab1, setActiveTab1] = React.useState(0);
    const [activeTab2, setActiveTab2] = React.useState(0);

    const renderContent1 = () => {
        const activeContent = listButtons1[activeTab1];
            return activeContent ? activeContent.content : '';
        };
    

    const renderContent2 = () => {
        const activeContent = listButtons2[activeTab2];
            return activeContent ? activeContent.content : '';
        };

  return (
    <div>
        <h1>Button Tabs</h1>
        <div className={styles.container}>
            <div className={styles.tabs}>
                {listButtons1.map((button, index) => (
                    <button
                        key={index}
                        className={`${styles.tabItem} ${activeTab1 === index ? styles.active : ''}`}
                        onClick={() => setActiveTab1(index)}
                    >
                        {button.label}
                    </button>
                ))}
            </div>
            <div className={styles.content}>
                <p>{renderContent1()}</p>
            </div>
        </div>

        <div className={styles.container}>
            <div className={styles.tabs}>
                {listButtons2.map((button, index) => (
                    <button
                        key={index}
                        className={`${styles.tabItem2} ${activeTab2 === index ? styles.active : ''}`}
                        onClick={() => setActiveTab2(index)}
                    >
                        {button.label}
                    </button>
                ))}
            </div>
            <div className={styles.content}>
                <p>{renderContent2()}</p>
            </div>
        </div>
    </div>
  )
}