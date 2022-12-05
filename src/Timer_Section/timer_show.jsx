import { useEffect, useState } from "react"
import { TaskList } from "../Task_Section/tasklist"

import { TimerShowUi } from "./timer_show_ui"

export const Timer_Main_Task_Section_Main=()=>{

    const [second,setSeconds]= useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours , sethours] = useState(0)
    const [taskinput,setTaskInput] = useState({
        title:"",
        description: ""
    })
    const [task, setTask] = useState([])

    console.log(task)



    const handleSubmit = (e) => {
        e.preventDefault()

        setTask((alldata) => {
            return ([...alldata, taskinput])
        })

    

    }



    let timer;



    useEffect(()=>{

        timer = setInterval(()=>{
            setSeconds(second+1)

            if(second == 59){
                setMinutes(minutes+1)
                setSeconds(0)

            }
            else if(minutes == 59){
                sethours(hours+1)
                setMinutes(0)

            }

            
        },1000)

        return()=>  clearInterval(timer)
    })


    
    const handleStart=()=>{
        setSeconds(0)
        setMinutes(0)
        sethours(0)
    }

    const handlePause=()=>{
        clearInterval(timer)
    }



 return(

    <div>
           <TimerShowUi 
                second ={second}
                minutes = {minutes}
                hours = {hours}
                handleStart={handleStart}
                handlePause={handlePause}
                taskinput={taskinput}
                setTaskInput={setTaskInput}
                task={task}
                setTask={setTask}
                handleSubmit={handleSubmit}
                 />


          {task.map((elem,index)=>(
           <TaskList
             key={index}
             elem={elem}
             index={index}
        />

     ))}

    
    </div>
 )



}