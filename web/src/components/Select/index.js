import React, { useState, useRef, useEffect } from 'react';
import Select from 'react-select';
import { useField } from '@rocketseat/unform';

export default function ReactSelect({
  name,
  options,
  setChange,
  defaultValueSelected,
}){
  const { fieldName, registerField, defaultValue } = useField(name);
  const [value, setValue] = useState(defaultValue && defaultValue);
  const ref = useRef();

  //console.tron.log(value);

  useEffect(() => setValue(defaultValueSelected), [defaultValueSelected]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'state.value',
    });
  }, [ref.current, fieldName]); //eslint-disable-line

  function handleChange(data){
    setValue(data);
    if (setChange){
      setChange(data);
    }
  }

  return (
    <Select
      name={fieldName}
      options={options}
      value={defaultValueSelected ? defaultValueSelected : value}
      defaultValue={defaultValueSelected}
      placeholder="Selecione um plano"
      onChange={handleChange}
      ref={ref}
    />
  )

}