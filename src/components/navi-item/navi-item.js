import './navi-item.scss';

const NaviItem = (props) => {
    const {name, link, secondary} = props;
    
    let clazz = 'navi-item';

    if(secondary) {
        clazz += ' secondary-navi-item'
    }
    
    return (
        <li className = {clazz}>
            <a href={link}>
                {name}
            </a>
        </li>
    )
}

export default NaviItem;