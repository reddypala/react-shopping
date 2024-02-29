
export default function Dropdown(props) {
   const {options}= props
    return (
        <div>
            <select className="form-select">
                {
                    options.map(option=>(
                        <option key={option}>{option}</option>
                    ))
                }
            </select>
        </div>
    )
}