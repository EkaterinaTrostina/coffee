import './logo.scss';

import { ReactComponent as Logo } from '../logo/logo.svg';

const Logotype = (props) => {
    const {secondary} = props;

    let clazz = 'logo'
    if(secondary) {
        clazz += ' logo--secondary';
    }
    return (
        <Logo className= {clazz}/>
    )
}
export default Logotype;