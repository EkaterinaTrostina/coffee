import NaviItem from "../navi-item/navi-item";


import './navi.scss'
const Navi = (props) => {
    let {secondary, center} = props;
    let clazz = 'navi';
    if(center) {
        clazz += ' navi-center';
    }

    const naviLinks = [
        {name: 'Coffee house', link: '#', id: 1},
        {name: 'Our coffee', link: '#', id: 2}, 
        {name: 'For your pleasure', link: '#', id: 3},
    ];

    const elements = naviLinks.map(elem => <NaviItem key={elem.id} name = {elem.name} link = {elem.link} secondary={secondary} />);
    return(
        <nav>
            <ul className = {clazz}>
                {elements}
            </ul> 
        </nav>
    )
}

export default Navi;