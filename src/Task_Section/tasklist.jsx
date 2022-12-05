import { Text } from "@chakra-ui/react"
export const TaskList=(props)=>{




    return(
        <div>
            <Text fontSize={"2xl"} fontWeight={600}>Task List</Text>
             <Text>{`Title :  ${props.elem.title}`}</Text>
             <Text>{`Description : ${props.elem.description}  `  }</Text>
        </div>
    )
}