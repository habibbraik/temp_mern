// eslint-disable-next-line react/prop-types
const FormRow= ({type,name,defaultValue,onChange,onClick,placeholder,className,min,max,accept}) => {
  return (
    <div >
     
      
    <input
       type={type}
       id={name}
       name={name}
       min={min}
       max={max}
       accept={accept}
       className={className}
       placeholder={placeholder}
       defaultValue={defaultValue || ''}
       onChange={onChange}
       onClick={onClick}
       required
      />
  </div>
  )
}

export default FormRow
