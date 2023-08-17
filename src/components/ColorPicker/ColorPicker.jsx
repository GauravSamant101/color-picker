import { useState } from 'react';
import styles from './ColorPicker.module.css';

const ColorPicker = () => {
  const [color, setColor] = useState('');
  const [colorList, setColorList] = useState([]);



  const handleAddColor = () => {
    setColorList([...colorList, color]);
    setColor('');
  };



  return (
    <div>
      <input type="text"
        value={color}
        onChange={(e)=>setColor(e.target.value)}
        placeholder="Enter a color" />

      <button onClick={handleAddColor}>Add Color</button>

      <div className={ styles.colorBox } style={{backgroundColor: color}}></div>

      {colorList.map((c, index) => (
        <button key={index} onClick={() => setColor(c)} >
          {c}
        </button>
      ))}
    </div>
  );
};

export default ColorPicker;
