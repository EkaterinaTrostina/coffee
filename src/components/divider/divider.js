import Logotype from '../logo/logo';

import './divider.scss';
import '../../base/variables.scss';

const Divider = (props) => {
    let {secondary} = props;
    let classNames = "divider";

    if(secondary) {
        classNames += " divider--secondary";
    }
    return (
        <div className= {classNames}>
            <span/>
            <Logotype secondary = {secondary}/>
            <span/>
        </div>
    )
}

export default Divider;