import './style.css'

const Filter = (props) => {
    return (
        <div className='filtro-container'>
            <h2 className='title-font'>{props.title}</h2>
            <select className='filtro'>
                <option>All</option>
                <option>Example</option>
                <option>Example</option>
                <option>Example</option>
                <option>Example</option>
            </select>
        </div>
    )
}

export default Filter