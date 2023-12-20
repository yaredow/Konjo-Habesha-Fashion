function InputField({
  label,
  id,
  value,
  onChange,
  isLoading,
  register,
  errors,
}) {
  return (
    <div className="relative mb-6 md:w-2/4 w-full">
      <input
        type={id}
        id={id}
        disabled={isLoading}
        {...register(id, {
          required: 'This field is required',
        })}
        className={`input peer ${errors[id] ? 'border-red-500' : ''}`}
        value={value}
        placeholder=""
        onInput={(e) => onChange(e.target.value)} // Use onChange instead of onInput
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
