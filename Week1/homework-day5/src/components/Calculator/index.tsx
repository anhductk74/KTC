import { useState } from 'react';
import styles from './Calculator.module.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [isResult, setIsResult] = useState(false);

  const handleClick = (value: string) => {
    if (value === 'C') {
      setDisplay('');
      setIsResult(false);
    } else if (value === '=') {
      if (!isResult && display) {
        try {
          const expression = display.replace('×', '*');
          const result = evaluateExpression(expression);
          setDisplay(result.toString());
        } catch {
          setDisplay('Error');
          setIsResult(true);
        }
      }
    } else if (!isResult) {
      // Kiểm tra xem ký tự cuối cùng có phải là toán tử không
      const operators = ['+', '-', '×'];
      const lastChar = display.slice(-1);
      if (operators.includes(value) && operators.includes(lastChar)) {
        // Không cho phép nhập 2 toán tử liên tiếp
        return;
      }
      // Chỉ cho phép nhập số, dấu chấm hoặc toán tử nếu hợp lệ
      if ((/\d/.test(value) || value === '.' || operators.includes(value)) && display.length < 15) {
        setDisplay(display + value);
      }
    }
  };

  const evaluateExpression = (exp: string) => {
    return Function(`'use strict';return (${exp})`)();
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>{display}</div>
      <div className={styles.keypad}>
        <button className={styles.key} onClick={() => handleClick('7')}>7</button>
        <button className={styles.key} onClick={() => handleClick('8')}>8</button>
        <button className={styles.key} onClick={() => handleClick('9')}>9</button>
        <button className={styles.keyOperator} onClick={() => handleClick('+')}>+</button>
        <button className={styles.key} onClick={() => handleClick('4')}>4</button>
        <button className={styles.key} onClick={() => handleClick('5')}>5</button>
        <button className={styles.key} onClick={() => handleClick('6')}>6</button>
        <button className={styles.keyOperator} onClick={() => handleClick('×')}>×</button>
        <button className={styles.key} onClick={() => handleClick('1')}>1</button>
        <button className={styles.key} onClick={() => handleClick('2')}>2</button>
        <button className={styles.key} onClick={() => handleClick('3')}>3</button>
        <button className={styles.keyOperator} onClick={() => handleClick('-')}>-</button>
        <button className={styles.key} onClick={() => handleClick('0')}>0</button>
        <button className={styles.key} onClick={() => handleClick('.')}>.</button>
        <button className={styles.keyClear} onClick={() => handleClick('C')}>C</button>
        <button className={styles.keyOperator} onClick={() => handleClick('+')}>+</button>
        <button className={styles.keyEqual} onClick={() => handleClick('=')}>=</button>
      </div>
    </div>
  );
};

export default Calculator;