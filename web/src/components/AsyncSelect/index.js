import React, { useRef, useState, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import AsyncSelect from 'react-select';


export default function InputAsyncSelect({
  name,
  options,
  defaultValueSelected,
  disabled,
  setChange,
}){
  const { fieldName, registerField, defaultValue } = useField(name); 
  const [value, setValue] = useState(defaultValue && defaultValue);
  const ref = useRef();
  console.tron.log(value);
  useEffect(() => setValue(defaultValueSelected), [defaultValueSelected]);

  function parseSelectValue(selectRef){
    return selectRef.select.state.value;
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'state.value',
      parseValue: parseSelectValue,
      clearValue: selectRef => {
        selectRef.select.clearValue();
      },
    });
  }, [ref.current, fieldName]); //eslint-disable-line

  function handleChange(data){
    if(setChange){
      setChange(data);
    }
    //setValue(e);
  }

  return (
    <>
      <AsyncSelect
        name={fieldName}
        defaultValue={defaultValueSelected}
        value={value}
        ref={ref}
        options={options}
        defaultOptions
        onChange={handleChange}
        placeholder="Buscar aluno"
        isDisabled={disabled}
      />
    </>
  )

}