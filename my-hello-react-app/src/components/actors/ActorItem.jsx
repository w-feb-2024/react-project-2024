import styles from './Actor.module.css';

function ActorItem(props){
    return(
        <>
        <div className={styles.div1}>
            <h2>{props.actChar}</h2>
            <h4>{props.actId}</h4>
            <h4>{props.actReal}</h4>
        </div>
        </>
    );
}
export default ActorItem;