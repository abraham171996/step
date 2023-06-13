
import { useState } from "react";
const Counter = () => {
    const [step,setStep] = useState(1)
    const [count,setCount] = useState(0)
  
    const date = new Date()
    date.setDate(date.getDate()+count)
  return (
    <div>
    <div>
      <button onClick={()=>setStep((e)=>e-1)}>-</button>
      <span>Step:{step}</span>
      <button onClick={()=>setStep((e)=>e+1)}>+</button>
    </div>
    <div>
      <button onClick={()=>setCount((e)=>e-step)}>-</button>
      <span>Count:{count}</span>
      <button onClick={()=>setCount((e)=>e+step)}>+</button>
    </div>
    <p>
      <span>
        {
          count===0
          ? "Today is "
          : count>0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `
        }
        </span>
      <span>{date.toDateString()}</span>
    </p>
  </div>
  )
}

export default Counter