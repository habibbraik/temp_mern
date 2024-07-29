const Textarea =({type,name,defaultValue,onChange,onClick,placeholder,className,rows,cols}) => {
    return (
      <div >
       
        
      <textarea
         type={type}
         id={name}
         name={name}
         rows={rows}
         cols={cols}
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
  
  export default Textarea
  