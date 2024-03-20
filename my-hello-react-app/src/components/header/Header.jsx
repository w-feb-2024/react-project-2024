import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header(){
    return(
        <>
        <h3 className={styles.head1}>
            <span>
                {/* <a href='/display'>Display Component</a> || */}
                <Link to='display'>Display Component</Link> ||
            </span>
            <span>
                {/* <a href='/todo'>Todo Component</a> || */}
                <Link to='todo'>Todo Component</Link> ||
            </span>
            <span>
                {/* <a href='/student-add'>Student Component</a> || */}
                <Link to='student-add'>Student Component</Link> ||
            </span>
            <span>
                {/* <a href='/counter'>Counter Component</a> || */}
                <Link to='counter'>Counter Component</Link> ||
            </span>
        </h3>
        </>
    );
}
export default Header;