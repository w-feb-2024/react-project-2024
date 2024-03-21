import styles from './UserList.module.css';
import { useState, useEffect } from 'react';

function UserList(){
    let [allUsers, setAllUsers] = useState();

    useEffect(()=>{
        handleFetchUsers();
    }, []);

    const handleFetchUsers = () => {
        const url = `https://jsonplaceholder.typicode.com/users`;
        fetch(url)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data);
                setAllUsers(data); // put the fetched data from the endpoint into state variable allUsers
                
            })
            .catch((error)=>console.log(error));
    };

    const allUsersDisplay = allUsers && allUsers.map((eachUser, index)=>
                            <div key={index} className={styles.div1}>
                                <h2>{eachUser.name}</h2>
                                <h4>{eachUser.email}</h4>
                                <h4>{eachUser.address.city}</h4>
                            </div>)

    return (
        <>
        {/* <button className="btn btn-success" onClick={handleFetchUsers}>GET USERS DATA</button> */}
        {allUsersDisplay}
        </>
    );
}
export default UserList;