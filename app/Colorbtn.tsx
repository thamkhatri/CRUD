// "use client";
// import { useState } from "react";

// export default function Colorbtn() {
//     const [isClicked, setIsCLicked] = useState(false);
//     const [isToggle, setIsToggle] = useState(false)
//     const handleClick = () => {
//         setIsCLicked(!isClicked);
//     }
//     const handleToggle = () => {
//         setIsToggle(!isToggle);
//     }
//     return (
//         <>
//             <div className="bg-amber-600">

//             </div>
//             <button onClick={handleClick} className={`px-6 py-3 text-white transition-colors duration-100 ${isClicked ? "bg-amber-800" : "bg-cyan-600"}`}>
//                 click me !
//             </button>
//             <div >
//                 <div className="">
//                     <button onClick={handleToggle}>x</button>
//                     <div className={`bg-amber-500 ${isToggle ? "flex bg-blue-800" : "block bg-fuchsia-800"}`}>
//                         <li>home</li>
//                         <li>conatct</li>
//                         <li>categories</li></div>
//                 </div>
//             </div>
//             <input type="text" placeholder="yes" />
//             <button className="bg-blue-400">save</button>
//         </>
//     )
// };
