import React from 'react'
import { Button, ButtonGroup ,Box, Spacer, Flex,Text} from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    
    FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react'
export const TimerShowUi=(props)=>{

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)



    const handleinput=(e)=>{
        const name = e.target.name;
        const value= e.target.value;

        props.setTaskInput({...props.taskinput, [name] : value})
      }




  
  

    return(
        <div>
       <h1>Welcome To Timer App</h1>
            
       <Text fontSize='3xl'color='teal' >Timer : {props.hours < 10 ? "0"+props.hours : props.hours}   :  {props.minutes < 10 ? "0"+ props.minutes : props.minutes} : {props.second < 10 ? "0"+ props.second : props.second}</Text>

        <Flex p={10} gap={5}>


        <Button colorScheme='teal' onClick={props.handleStart}>Start</Button>  
       <Button colorScheme='teal'  onClick={props.handlePause}>Pause</Button>
       
       <Button colorScheme='teal' onClick={onOpen} >
         Save
       </Button>

        </Flex>



         <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Task in App</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>

            

            <form>
               Title:{}
                <input placeholder='Write Title' name="title" value={props.taskinput.title}
                 onChange={handleinput}

                /> <br></br> <br></br>
                Description:{}
                <input placeholder='Description' name="description" value={props.taskinput.description}
                onChange={handleinput}

                /> <br></br> <br></br>
                <Button colorScheme='blue' mr={3}  onClick={props.handleSubmit}>Save</Button>
            </form>
          </ModalBody>

          <ModalFooter>
           
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>



       


       
        </div>
    )
}