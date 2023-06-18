import React,{useState} from "react";

const Form = () => {

    const [gender, setGender] = useState('');
  const [shirtSize, setShirtSize] = useState('');
  const [dressSize, setDressSize] = useState('');

  const handleGenderChange = (event) => {
    const selectedGender = event.target.value;
    setGender(selectedGender);
  };

  const handleShirtSizeChange = (event) => {
    const selectedShirtSize = event.target.value;
    setShirtSize(selectedShirtSize);
  };

  const handleDressSizeChange = (event) => {
    const selectedDressSize = event.target.value;
    setDressSize(selectedDressSize);
  };

  return (
    <div>
      <h2>Select your gender:</h2>
      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={handleGenderChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={handleGenderChange}
          />
          Female
        </label>
      </div>

      {gender === 'male' && (
        <div>
          <h2>Select your shirt size:</h2>
          <select value={shirtSize} onChange={handleShirtSizeChange}>
            <option value="">Select size</option>
            <option value="s">Small</option>
            <option value="m">Medium</option>
            <option value="l">Large</option>
          </select>
        </div>
      )}

      {gender === 'female' && (
        <div>
          <h2>Select your dress size:</h2>
          <select value={dressSize} onChange={handleDressSizeChange}>
            <option value="">Select size</option>
            <option value="s">2</option>
            <option value="m">4</option>
            <option value="l">6</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default Form;