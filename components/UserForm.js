import {
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { IconTrash } from "@tabler/icons";

function UserForm(props) {
  return (
    <div className="h-full max-w-3xl mx-auto">
      <Center className={"h-full"}>
        <form
          onSubmit={props.onSubmit}
          className={" max-w-md w-full text-white"}
        >
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              name={"name"}
              onChange={props.onChange}
              value={props.formState.name}
              mb={2}
              type={"text"}
            ></Input>
            <FormLabel>Department</FormLabel>
            <Select
              onChange={props.onChange}
              name={"department"}
              value={props.formState.department}
              mb={2}
            >
              <option value={null}>CHOOSE</option>
              {department.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
            <FormLabel>Branch</FormLabel>
            <Select
              onChange={props.onChange}
              name={"branch"}
              value={props.formState.branch}
              mb={2}
            >
              <option value={null}>CHOOSE</option>
              {branch.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
            <FormLabel>Roll number</FormLabel>
            <Input
              onChange={props.onChange}
              name={"roll_number"}
              value={props.formState.roll_number}
              mb={2}
              type={"text"}
            ></Input>
            <FormLabel>Public key</FormLabel>
            <Input
              isInvalid={props.formState.pubKey === ""}
              readOnly
              value={props.formState.pubKey}
              mb={2}
              type={"text"}
            ></Input>
            <FormHelperText hidden={props.formState.pubKey !== ""}>
              Wallet not connected, reconnect.
            </FormHelperText>
            <Button
              hidden={props.formState.pubKey !== ""}
              variant={"link"}
              colorScheme={"twitter"}
              onClick={props.onClick}
            >
              reconnect wallet
            </Button>
            <FormLabel>Email</FormLabel>
            <Input
              onChange={props.onChange}
              name={"email"}
              value={props.formState.email}
              mb={2}
              type={"email"}
            ></Input>
            <FormLabel>Role</FormLabel>
            <Select
              onChange={props.onChange}
              name={"role"}
              value={props.formState.role}
              mb={2}
            >
              <option value={null}>CHOOSE</option>
              {props.roles
                ? props.roles.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))
                : roles.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
            </Select>
          </FormControl>
          <div className={"py-2 flex justify-between"}>
            <Button
              isLoading={props.loading}
              onClick={props.onClick1}
              colorScheme={"twitter"}
            >
              Submit
            </Button>
            {props.deleteUser && (
              <Button
                leftIcon={<IconTrash />}
                onClick={props.deleteUser}
                colorScheme={"red"}
              >
                Delete user
              </Button>
            )}
          </div>
        </form>
      </Center>
    </div>
  );
}

const roles = [
  // "Executive",
  "User",
  // "Teacher"
];

const branch = [
  "Artificial Intelligence and Data science",
  "Computer Science and Design",
  "Computer Science and Engineering",
  "Computer Science and Enginnering with Cybersecurity",
];

const department = ["Computer Science and Engineering"];

export { roles, branch, department };
export default UserForm;
