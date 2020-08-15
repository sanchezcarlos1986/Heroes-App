import {renderHook, act} from '@testing-library/react-hooks';
import {useForm} from '~hooks';

describe('useForm hook', () => {
  test('should returns default values', () => {
    const {result} = renderHook(() => useForm());
    const [values, handleInputChange, reset] = result.current;

    expect(values).toEqual({});
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('should returns passed initial values', () => {
    const initialValues = {
      name: 'Carlos',
      lastName: 'Sánchez',
      age: 33,
    };
    const {result} = renderHook(() => useForm(initialValues));
    const [values] = result.current;

    expect(values).toEqual(initialValues);
  });

  test('should calls handleInputChange and returns the updated values', () => {
    const initialValues = {
      name: 'Carlos',
      lastName: 'Sánchez',
      age: 33,
    };

    const {result} = renderHook(() => useForm(initialValues));
    const [, handleInputChange] = result.current;
    const newName = 'Charly';

    act(() =>
      handleInputChange({
        target: {
          value: newName,
          name: 'name',
        },
      }),
    );

    const [values] = result.current;
    expect(values).toEqual({...initialValues, name: newName});
  });

  test('should calls reset and returns the initial values', () => {
    const initialValues = {
      name: 'Carlos',
      lastName: 'Sánchez',
      age: 33,
    };

    const {result} = renderHook(() => useForm(initialValues));
    const [, handleInputChange, reset] = result.current;
    const newName = 'Charly';

    act(() =>
      handleInputChange({
        target: {
          value: newName,
          name: 'name',
        },
      }),
    );

    act(() => reset());

    const [values] = result.current;
    expect(values).toEqual({...initialValues});
  });
});
