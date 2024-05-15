import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { Props } from './type';

const Button = ({ children, type = 'button' , disabled }: Props) => {
  return (
    <button type={type} className={`block w-full py-2 font-bold text-white rounded ${disabled ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'}`} disabled={disabled}>{children}</button>
  );
};

export default Button;
