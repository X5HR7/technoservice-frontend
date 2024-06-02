import { ChangeEvent, useCallback, useState } from 'react';

function useFormWithValidation<ISchema>(initialValues: ISchema) {
  const [values, setValues] = useState<ISchema>(initialValues);
  const [errors, setErrors] = useState<Partial<ISchema>>({});
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const name = target.id;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    // @ts-ignore
    setIsValid(target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = initialValues, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, setIsValid, resetForm, setErrors };
}

export default useFormWithValidation;
