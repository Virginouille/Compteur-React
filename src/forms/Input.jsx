/**
 * 
 * @param {string} placeholder 
 * @param {string} value 
 * @param {(s: string) => void} onChange 
 * @returns {JSX.Element}
 * @returns 
 */

export function Input({ placeholder, value, onChange }) {
    return <div>
        <input type="number"
            className="form-group"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)} />
    </div>
}