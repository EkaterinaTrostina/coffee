import './filter.scss'
const Filter = (props) => {
    const filterNames = ['Brazil', 'Kenya', 'Columbia'];

    const buttons = filterNames.map(item => {
        const active = props.filter === item;
        const clazz = active ? 'filter-btn active-btn' : 'filter-btn';

        return (
            <button  
                className= {clazz}
                type="button"
                key= {item}
                onClick = { () => props.onFilterSelect(item)}
                >
                {item}  
            </button>
        )
    });

    return (
        <div className= "filters">
            <span>Or filter</span>
            {buttons}
        </div>
    )


};

export default Filter;