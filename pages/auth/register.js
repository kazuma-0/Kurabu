import {useCallback, useReducer, useState} from "react";
import {Button, Center, FormControl, FormHelperText, FormLabel, Input, Select, useToast} from "@chakra-ui/react";
import {frontendClient} from "../../client";
import {AnimatePresence, motion} from "framer-motion";
import {useWallet} from "@solana/wallet-adapter-react";
import {useWalletModal} from "@solana/wallet-adapter-react-ui";
import signUpFormReducer from "../../reducers/signUpFormReducer";

const roles = [
    // "Executive",
    "User",
    // "Teacher"
]

const branch = [
    "Artificial Intelligence and Data science",
    "Computer Science and Design",
    "Computer Science and Engineering",
    "Computer Science and Enginnering with Cybersecurity"
]

const department = [
    "Computer Science and Engineering"
]


function Invite(props) {
    return <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                       className="absolute top-0 left-0 h-full w-full bg-black/90 rounded shadow">
        <Center className="h-full">
            <div className="rounded shadow p-5 bg-[#101014] lg:w-80">
                <FormControl>
                    <FormLabel>Enter your invite code</FormLabel>
                    <Input value={props.value} onChange={props.onChange} type="text"/>
                    <FormHelperText>Enter your invite code to continue (case sensitive)</FormHelperText>
                    <Center>
                        <Button onClick={props.onClick} disabled={props.value === ""} variant={"outline"}
                                isLoading={props.loading} mt={2}
                                colorScheme={"whatsapp"}>Submit</Button>
                    </Center>
                </FormControl>
            </div>
        </Center>
    </motion.div>;
}

const formInitialState = {
    "name": "",
    "department": "",
    "branch": "",
    "roll_number": "",
    "pubKey": "",
    "email": "",
    "role": "",
}

function Register() {
    const {connected, publicKey} = useWallet()
    const modal = useWalletModal()



    const reconnect = useCallback(() => {
        if (!connected) {
            modal.setVisible(true);
            return;
        }
        modal.setVisible(false);
        dispatch({
            type: "PUBLIC KEY",
            field: "pubKey",
            payload: publicKey.toBase58()
        })
    }, [publicKey])
    const [formState, dispatch] = useReducer(signUpFormReducer, formInitialState);
    const [loading, setLoading] = useState(false);
    const [code, setCode] = useState("");
    const [valid, setValid] = useState(false);
    const toast = useToast({
        position: 'bottom-right',
        containerStyle: {
            color: "#000"
        }
    })
    const validateInviteCode = useCallback(async () => {
        setLoading(true)
        try {
            const {data} = await frontendClient.post('/validate-invite', {
                code: code,
            })
            setValid(true);
            setLoading(false);
            toast({
                title: "Invite code accepted",
                status: "success",
                description: "Do not navigate away from this page. Your invite code will work only once"
            })
        } catch (e) {
            setLoading(false)
            toast({
                title: "Invalid/Expired invite code",
                status: "error",
                // description:""
            })
        }
    }, [code])

    const handleName = useCallback((e) => {
        dispatch({
            type: "NAME",
            field: e.target.name,
            payload: e.target.value
        })
    }, [])

    const handleDept = useCallback((e) => {
        dispatch({
            type: "NAME",
            field: e.target.name,
            payload: e.target.value
        })
    }, [])
    const handleBranch = useCallback((e) => {
        dispatch({
            type: "BRANCH",
            field: e.target.name,
            payload: e.target.value
        })
    }, [])
    const handleRoll = useCallback((e) => {
        dispatch({
            type: "ROLL NO",
            field: e.target.name,
            payload: e.target.value
        })
    }, [])
    const handleEmail = useCallback((e) => {
        dispatch({
            type: "EMAIL",
            field: e.target.name,
            payload: e.target.value
        })
    }, [])

    const handleRole = useCallback((e) => {
        dispatch({
            type: "ROLE",
            field: e.target.name,
            payload: e.target.value
        })
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.target)
    }

    function handleInput(e){
        setCode(e.target.value);
    }

    return <div className={"h-cover relative"}>
        <div className="h-full max-w-3xl mx-auto">
            <Center className={"h-full"}>
                <form onSubmit={handleSubmit} className={" max-w-md w-full text-white"}>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input name={"name"} onChange={handleName} value={formState.name} mb={2} type={"text"}></Input>
                        <FormLabel>Department</FormLabel>
                        <Select onChange={handleDept} name={"department"} value={formState.department} mb={2}>
                            <option value={null}>CHOOSE</option>
                            {
                                department.map(item => <option key={item} value={item}>{item}</option>)
                            }
                        </Select>
                        <FormLabel>Branch</FormLabel>
                        <Select onChange={handleBranch} name={"branch"}  value={formState.branch} mb={2}>
                            <option value={null}>CHOOSE</option>
                            {
                                branch.map(item => <option key={item} value={item}>{item}</option>)
                            }
                        </Select>
                        <FormLabel>Roll number</FormLabel>
                        <Input onChange={handleRoll} name={"roll_number"} value={formState.roll_number} mb={2} type={"text"}></Input>
                        <FormLabel>Public key</FormLabel>
                        <Input isInvalid={formState.pubKey === ''} readOnly value={formState.pubKey} mb={2} type={"text"}></Input>
                        <FormHelperText hidden={formState.pubKey !== ''}>Wallet not connected, reconnect.</FormHelperText>
                            <Button hidden={formState.pubKey !== ''} variant={"link"} colorScheme={"twitter"} onClick={(e) => {
                                e.preventDefault();
                                reconnect()
                            }}>reconnect wallet</Button>
                        <FormLabel>Email</FormLabel>
                        <Input onChange={handleEmail} name={"email"} value={formState.email} mb={2} type={"email"}></Input>
                        <FormLabel>Role</FormLabel>
                        <Select onChange={handleRole} name={"role"} value={formState.role} mb={2}>
                            <option value={null}>CHOOSE</option>
                            {
                                roles.map(item => <option key={item} value={item}>{item}</option>)
                            }
                        </Select>

                    </FormControl>
                    <Button type={"submit"} colorScheme={"twitter"}>Sign up</Button>
                </form>
            </Center>
        </div>
        <AnimatePresence>
            {!valid && <Invite value={code} onChange={handleInput} onClick={validateInviteCode} loading={loading}/>}
        </AnimatePresence>
    </div>
}

export default Register;