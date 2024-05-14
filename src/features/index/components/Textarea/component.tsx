import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { Props } from './type';

const Textarea = ({ name, label, placeholder }: Props) => {
  const { register, formState: { errors } } = useFormContext();

  const error = useMemo(() => errors[name], [errors, name])

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <textarea
        {...register(name)}
        placeholder={placeholder}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      {error && <p className="text-red-500 text-xs italic">{error.message as string}</p>}
    </div>
  );
};

export default Textarea;
