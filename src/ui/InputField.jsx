import { useSelector } from 'react-redux';
import { selectUser } from '../features/account/accountSlice';

function InputField({
  label,
  id,
  value,
  onChange,
  isLoading,
  register,
  errors,
  isRequired = true,
}) {
  const user = useSelector(selectUser);
  return (
    <div className="relative mb-6 md:w-2/4 w-full">
      <input
        type={id}
        id={id}
        disabled={isLoading}
        {...register(id, {
          required: isRequired ? 'This field is required' : false,
        })}
        className={`input ${isRequired ? 'peer' : ''}  ${
          errors[id] ? 'border-red-500' : ''
        }`}
        value={value}
        placeholder={!isRequired ? user[id] : ''}
        onInput={(e) => onChange(e.target.value)}
      />
      <label htmlFor={id} className="label">
        {label}
      </label>
      {errors[id] && (
        <p className="text-red-500 text-sm mt-1">{errors[id].message}</p>
      )}
    </div>
  );
}

export default InputField;