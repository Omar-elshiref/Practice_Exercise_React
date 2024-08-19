// first way const >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function Hello(person) {
//     const style1 = {
//         color: "red",
//         fontSize: "100px"
//     }
//   return <h1 style={style1}>Hello my name is: {person.name} and my age is: {person.age}</h1>;
// }

// export default Hello;

//========================================================================================================================================

// second way inline >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function Hello(person) {
  
//   return <h1 style={{
//      color: "red",
//      fontSize: "100px"}}>
//         Hello my name is: {person.name} and my age is: {person.age}
//         </h1>;
// }

// export default Hello;

//========================================================================================================================================

// thred way a css file >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// import "../Hello.css"
// function Hello(person) {
   
//   return <h1 className="test">Hello my name is: {person.name} and my age is: {person.age}</h1>;
// }

// export default Hello;

//========================================================================================================================================

// four way a module.css file >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

import Styles from "../Hello.module.css"
function Hello(person) {
   
  return <h1 className={Styles.test2}>Hello my name is: {person.name} and my age is: {person.age}</h1>;
}

export default Hello;
