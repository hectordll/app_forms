export function Checkbox({checked, onChange, label}){
    return (
        <>
            <input type="checkbox" className="form-checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)}></input>
            <label>{label}</label>
        </>
    )
}