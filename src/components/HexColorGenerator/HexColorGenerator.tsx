import { useEffect, useState } from 'react';
import styles from './HexColorGenerator.module.css';

const HexColorGenerator = () => {
  const [colorOption, setColorOption] = useState<string>('hex');
  const [randomColor, setRandomColor] = useState<string>(
    '#' + Math.floor(Math.random() * 16777215).toString(16)
  );

  useEffect(() => {
    if (colorOption) generateRandomColor();
  }, [colorOption]);

  const handleColorSelect = (option: string) => {
    setColorOption(option);
  };

  const generateRandomColor = () => {
    console.log('Generating random color');
    console.log('Selected color option:', colorOption);
    if (colorOption === 'hex') {
      setRandomColor('#' + Math.floor(Math.random() * 16777215).toString(16));
    } else {
      setRandomColor(
        'rgb(' +
          Math.floor(Math.random() * 256) +
          ', ' +
          Math.floor(Math.random() * 256) +
          ', ' +
          Math.floor(Math.random() * 256) +
          ')'
      );
    }
  };

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: randomColor,
      }}
    >
      <h1>Hex Color Generator</h1>
      <div className={styles.buttonGroup}>
        <button
          className={styles.button}
          onClick={() => handleColorSelect('hex')}
        >
          Create Hex Color
        </button>
        <button
          className={styles.button}
          onClick={() => handleColorSelect('rgb')}
        >
          Create RGB Color
        </button>
        <button className={styles.button} onClick={generateRandomColor}>
          Genereate Random Color
        </button>
      </div>
      <br />
      <br />
      <div className={styles.colorDisplay}>
        <div
          className={styles.colorBox}
          style={{ background: randomColor }}
        ></div>
        <div className={styles.colorCode}>
          <div>
            <span>{colorOption} Color</span>
          </div>
          <p>{randomColor}</p>
        </div>
      </div>
    </div>
  );
};

export default HexColorGenerator;
