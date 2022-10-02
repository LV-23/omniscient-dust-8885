import {
    Box, Flex, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input, Heading,
    Image,
    Checkbox,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Stack,
    Select,
    Button,

} from "@chakra-ui/react"
import { useRef, useState } from "react"
import { Footer } from '../Components/HomePageMain_Components/Footer'
import axios from "axios"
import { FcOk } from "react-icons/fc";
import { Icon } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { signup } from "../Functions/SignUp";

export const SignUp = () => {

    const inpMail = useRef(null);
    const inpPass = useRef(null);
    const inpName = useRef(null);
    const inpCompanyName = useRef(null);
    const inpPhone = useRef(null);
    const navigator = useNavigate();

    const signUpUser = async () => {
        let obj = {
            email: inpMail.current.value,
            password: inpPass.current.value,
            name: inpName.current.value,
            companyName: inpCompanyName.current.value,
            phone: inpPhone.current.value
        }

        const response = signup(obj);

        if (response !== undefined) {
            navigator('/login')
        }
    }

    return <Box bg='#282c34' mt='-20px' color='#fff'>
        <Flex direction={['column', 'column', 'column', 'row']} m='auto'>

            <Box p='15px' w={['100%', '100%', '100%', '50%']}>
                <Flex w='90%' direction='column' justify='center' m='auto' p={['35px 10px 10px 35px']} h='100%'>

                    <Box m='25px 0 35px '>
                        <Image src='https://assets.www.happyfox.com/v2/images/logos/hf-topbar-logo.svg' alt='logo' />
                    </Box>
                    <Heading m='25px auto'>Get a 30 minute Help Desk Demo with our Product Experts</Heading>

                    <List spacing={3} m='25px'>
                        <ListItem>
                            <ListIcon as={FcOk} />
                            Handle all incoming requests in one ticketing system
                        </ListItem>
                        <ListItem>
                            <ListIcon as={FcOk} />
                            Build an online knowledge base and promote self-service
                        </ListItem>
                        <ListItem>
                            <ListIcon as={FcOk} />
                            Automate repetitive tasks and serve your customers fast
                        </ListItem>
                        {/* You can also use custom icons from react-icons */}
                        <ListItem>
                            <ListIcon as={FcOk} />
                            Analyze help desk metrics and take smart decisions
                        </ListItem>
                    </List>





                </Flex>

            </Box>

            <Box w={['95%', '93%', '90%', '50%']} pt='100px' mx='auto' >
                < Box w={['90%', '90%', '90%', '500px']} maxW='500px' m=' auto auto 150px' borderRadius='25px' shadow={'lg'} border='1px solid rgb(235,235,235)' p='35px' >


                    <Image w='100px' position={'absolute'} mt='-100px' transform={'translate(280px,0)'}
                        src='https://assets.happyfoxchat.com/v2/agent/images/18873ce36f62c5ace5e98f4b564cfd66.png' />

                    <Heading w='fit-content' m='auto' mb='35px' fontWeight='500'>See HappyFox in Action</Heading>

                    <FormControl display={'flex'} flexDirection='column' align='center'>

                        <Stack color='#000' display={'flex'} justify='center' align='center'>
                            <Input ref={inpName} bg='#fff' type='text' placeholder='Your Name' />
                            <Input ref={inpMail} bg='#fff' type='email' placeholder='Work Email' />
                            <Input ref={inpPhone} bg='#fff' type='number' placeholder='Phone' />
                            <Input ref={inpCompanyName} bg='#fff' type='Text' placeholder='Company Name' />
                            <Input ref={inpPass} bg='#fff' type='password' placeholder='Password' />
                            <br />
                            <Button onClick={signUpUser} textAlign='center' className='demoButton' >Get Demo</Button>
                        </Stack>




                    </FormControl>
                </Box>
            </Box >





        </Flex >

        <Footer hide={true} />
    </Box >
}