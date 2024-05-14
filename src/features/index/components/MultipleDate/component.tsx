import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import "react-datepicker/dist/react-datepicker.css"
import { Props } from './type';
import ReactDatePicker, { ReactDatePickerProps, registerLocale } from 'react-datepicker';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

//日本語化
registerLocale("ja", ja);

const MultipleDate = ({ name, label, placeholder }: Props) => {
  const { register, formState: { errors }, getValues, setValue  } = useFormContext();

  const onChangeDate = useCallback(
    (date: Date | null) => {
      if (date) {
        const newValue = getValues(name) ? `${getValues(name)}, ${format(date, 'yyyy-MM-dd')}` : format(date, 'yyyy-MM-dd')
        setValue(name, newValue)
      }
    }, [getValues, name, setValue])


  const error = useMemo(() => errors[name], [errors, name])

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <div className='flex'>
      <ReactDatePicker
          locale="ja"
          onChange={onChangeDate}
          customInput={<div className="shadow block w-full border rounded-l-lg px-4 py-2 bg-gray-100 hover:bg-gray-200 font-bold">+</div>}
        />
        <input
          {...register(name)}
          placeholder={placeholder}
          className="shadow appearance-none border rounded-r-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      {error && <p className="text-red-500 text-xs italic">{error.message as string}</p>}
    </div>
  );
};

export default MultipleDate;
