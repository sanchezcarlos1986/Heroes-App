import {useState} from 'react';

/**
 * Represents a useEffect statement
 * @constructor
 * @param {object} initialState - Initial state of form
 * @return {array} [values object, handleInputChange and reset methods]
 */
const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({target}) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};

export default useForm;
