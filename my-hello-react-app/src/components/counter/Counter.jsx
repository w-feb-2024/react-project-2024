import styles from './Counter.module.css';
import { useState } from 'react';

function Counter(){
    // we need to introduce state in this component
    // so when we make any changes to the count variable , react is aware of it
    // and react can change the dom accordingly
    // to use state in this component, we will use a react hook called useState()
    // create count as a state variable

    let mark = '50';
    let allColors = [];
    //allColors[0] = "red";
    allColors['c1'] = "red";
    allColors['c2'] = "blue";
    allColors['c3'] = "green";
    allColors['c4'] = "black";
    allColors['c5'] = "white";
    allColors['c6'] = "orange";
    console.log(allColors['c2']);

    let c41 = allColors['c4'];
    let c11 = allColors['c1'];
    let c61 = allColors['c6'];
    let c21 = allColors['c2'];

    // we can combine the above 4 lines in one line using array destructuring
    let [c4, c1, c6, c2] = allColors;
    //console.log(c4);


    //array destructuring
    // count - is a variable
    // setCount - is function used to set the value of count variable
    // the 0 in useState is the initial value of count variable
    let [count, setCount] = useState(0);


    //let count = 0;
    const handleIncrement = () => {
        //count = count + 1;

        setCount(prevCount=>prevCount + 1); // look for state updater functions
        setCount(prevCount=>prevCount + 1);
        setCount(prevCount=>prevCount + 1);
        setCount(prevCount=>prevCount + 1);
        setCount(prevCount=>prevCount + 1);
    }
    const handleDecrement = () => {
        //count = count - 1;
        setCount(count - 1);
        setCount(count - 1);
        setCount(count - 1);
        setCount(count - 1);
        setCount(count - 1);
    }
    return(
        <>
            <h2 className={styles.head2}>Counter Component</h2>
            <button 
                type="button" 
                className={styles.button1} 
                onClick={handleDecrement}>-</button>
            <span className={styles.span1}>{count}</span>
            <button 
                type="button" 
                className={styles.button1} 
                onClick={handleIncrement}>+</button>
        </>
    );
}
export default Counter;