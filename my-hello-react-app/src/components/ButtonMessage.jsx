function ButtonMessage(){

    const displayMessage1 = () => {
        console.log("Message printed by clicking Click Me 1");
    }

    const displayMessage2 = (msg) => {
        console.log("Message printed by clicking Click Me 2:" + msg);
    }

    const displayMessage3 = (test) => {
        console.log(test);
        test.target.textContent = "Clicked";
    }
    return (
        <>
        <h2>Button Message Component</h2>
        {/* donot call the function in onClick event, only passs the function definition */}
        <button type='button' onClick={displayMessage1}>Click Me 1</button>
        <button type='button' onClick={()=>{displayMessage2("hello")}}>Click Me 2</button>
        <button type='button' onClick={(test)=>{displayMessage3(test)}}>Click Me 3</button>
        </>
    );
}
export default ButtonMessage;