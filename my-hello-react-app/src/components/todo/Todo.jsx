import { useState } from 'react';
import styles from './Todo.module.css';

function Todo(){
    let [allTasks, setAllTasks] = useState(["Water the plants", "Buy Milk"]);
    //let allTasks = ["Water the plants", "Buy Milk"];
    let allTasksDisplay = allTasks.map((eachTask, index)=><li className={styles.items} onClick={()=>removeTodo(eachTask)} key={index}>{eachTask}</li>)

    const removeTodo = (task) => {
        setAllTasks(allTasks.filter((eachTask)=>eachTask!==task));
    }

    const addTodo = () => {
        // take out the value of the text box 
        let task = document.getElementById("data").value;
        document.getElementById("data").value = '';
        // we have to add this value to the state array variable allTasks through setAllTasks
        //let newAllTasks = [...allTasks, task];
        //setAllTasks(newAllTasks);
        setAllTasks([...allTasks, task]);
    }
    return(
        <>
        <h2 className={styles.head2}>List of Tasks</h2>
        <input className={styles.input1} type="text" id="data"/>
        <button type="button" onClick={addTodo} className={styles.button1}>Add</button>
        <ul>
            {allTasksDisplay}
        </ul>
        </>
    );
}
export default Todo;