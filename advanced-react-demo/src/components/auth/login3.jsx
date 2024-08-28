
// >>>>>>>>>>>>>>>>>>>>>>>>>>> Uncontrolled component <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


import { useRef } from "react";

const Login3 = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const ageRef = useRef();


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', nameRef.current.value);
        console.log('Email:', emailRef.current.value);
        console.log('Age:', ageRef.current.value);
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

            <input type="text" name="name" ref={nameRef} />
            <input type="email" name="email" ref={emailRef} />
            <input type="number" name="age" ref={ageRef} />
            <button type="submit">Submit</button>
        </form>
    );
};


export default Login3;
