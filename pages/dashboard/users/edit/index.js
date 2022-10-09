import {useWallet} from "@solana/wallet-adapter-react";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {frontendClient} from "../../../../client";
import {Badge, FormControl, Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import Link from "next/link";
import {IconSearch} from "@tabler/icons";

function Users() {
    const {connected, publicKey} = useWallet();
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState(null);
    const [filtered, setFiltered] = useState(null)
    const [search, setSearch] = useState("")
    const router = useRouter();
    useEffect(() => {
        if (!connected && publicKey) {
            router.push("/auth", "login");
            return;
        }
        getAllUsers();
    }, [publicKey, user]);

    async function getAllUsers() {
        try {
            const {data} = await frontendClient.get("users", {
                headers: {
                    pubKey: publicKey.toBase58(),
                },
            });
            setUsers(data);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        console.log(search)
        if (search === '') {
            setFiltered(users);
            return;
        }
        const tmp = users.filter(user => {
            return user.name.toLowerCase().includes(search) || user.roll_number.toLowerCase().includes(search);
        })
        setFiltered(tmp);
    }, [search, users]);

    function searchUser(e) {
        setSearch(e.target.value);
    }

    return (
        <div className="h-cover">
            <div className="pb-10">
                <FormControl>
                    <InputGroup>
                        <InputLeftElement pointerEvents={"none"}>
                            <IconSearch/>
                        </InputLeftElement>
                        <Input placeholder={"search using name or roll number"} value={search} onChange={searchUser}></Input>
                    </InputGroup>
                </FormControl>
            </div>
            <div className=" grid md:grid-cols-2 gap-5  lg:grid-cols-3">
                {filtered?.map((user) => (
                    <div
                        key={user.id}
                        className="bg-[#16171d] p-3 rounded-lg shadow-lg ring-1 ring-white/30"
                    >
                        <div className="flex justify-between">
                            <p className="text-[11px]">
                                {user.pubKey.substr(0, 3)}...{user.pubKey.substr(40, 3)}
                            </p>
                            <Badge colorScheme={user.role === "User" ? "teal" : "messenger"}>
                                {user.role}
                            </Badge>
                        </div>
                        <Link href={`/dashboard/users/edit/${user.pubKey}`}>
                            <h3 className="text-xl font-bold cursor-pointer">{user.name}</h3>
                        </Link>
                        <p>{user.roll_number}</p>
                        <Badge variant={"solid"} colorScheme="facebook">
                            {user.department}
                        </Badge>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Users;
