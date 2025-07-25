import React from "react";
import styles from "./ButtonAccordtions.module.css";

export default function ButtonAccordtions() {
  const listButtons = [
    { label: 'HISTORY', content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.' },
        { label: 'APPROACH', content: 'Contenido de tabNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?' },
        { label: 'CULTURE', content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.' },
        { label: 'METHOD', content: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.' },
  ];

  const [activeAccordion, setActiveAccordion] = React.useState<number | null>(null);

  const [activeAccordionsRight, setActiveAccordionsRight] = React.useState<boolean[]>(
    Array(listButtons.length).fill(false)
  );

  const toggleAccordion = (index: number) => {
    setActiveAccordion(prev => (prev === index ? null : index));
  };

  const toggleAccordionRight = (index: number) => {
    setActiveAccordionsRight(prev => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <div>
      <h1>Button Accordions</h1>
      <div className={styles.container}>
        <div className={styles.accordion}>
          {listButtons.map((item, index) => (
            <div key={index} className={styles.accordionItem}>
              <div className={styles.accordionHeader}>
                <button className={`${styles.accordionButton} ${activeAccordion === index ? styles.active : ''}`} onClick={() => toggleAccordion(index)}> {item.label}</button>
              </div>
              {activeAccordion === index && (
                <div className={styles.accordionContent}>
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.accordion}>
          {listButtons.map((item, index) => (
            <div key={index} className={styles.accordionItem}>
              <div className={styles.accordionHeader}>
                <button className={`${styles.accordionButton} ${activeAccordionsRight[index] ? styles.active : ''}`} onClick={() => toggleAccordionRight(index)}>{item.label}</button>
              </div>
              {activeAccordionsRight[index] && (
                <div className={styles.accordionContent}>
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
