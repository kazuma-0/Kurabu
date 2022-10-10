import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Textarea,
} from "@chakra-ui/react";
import CSSEditor from "./CssEditor";
import HtmlEditor from "./HtmlEditor";
import MdViewer from "./MdViewer";
import { useWallet } from "@solana/wallet-adapter-react";
import { IconPencil } from "@tabler/icons";

function EditorLayout(props) {
  const { publicKey, connected } = useWallet();
  console.log(props);

  function cssChange(e) {
    props.dispatch({
      type: "styles",
      field: "styles",
      payload: e,
    });
  }

  function mdChange(e) {
    props.dispatch({
      type: "markdown",
      field: "markdown",
      payload: e,
    });
    // props.onChangeMd(e);
  }

  return (
    <div className="max-w-7xl mx-auto">
      <Tabs isFitted variant={"enclosed"}>
        <TabList>
          <Tab>Markdown</Tab>
          <Tab>Styles</Tab>
          <Tab>Preview</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <HtmlEditor onChange={mdChange} value={props.state.markdown} />
          </TabPanel>
          <TabPanel>
            <CSSEditor onChange={cssChange} value={props.state.styles} />
          </TabPanel>
          <TabPanel>
            <MdViewer
              markdown={props.state.markdown}
              css={props.state.styles}
            />
            <hr />
            <div>
              <FormControl>
                <FormLabel fontSize={"xl"}>Title</FormLabel>
                <Input
                  value={props.state.title}
                  onChange={props.dispatcher}
                  isInvalid={props.state.title === ""}
                  name={"title"}
                  type={"text"}
                ></Input>

                <FormLabel fontSize={"xl"}>Banner image</FormLabel>
                <Input
                  value={props.state.image_url}
                  isInvalid={props.state.image_url === ""}
                  onChange={props.dispatcher}
                  name={"image_url"}
                  type={"text"}
                ></Input>
                <FormHelperText>
                  Upload image in an online hosting service and paste the link
                  here. Recommended:{" "}
                  <a
                    href={"https://catbox.moe"}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    catbox
                  </a>
                </FormHelperText>
                <div
                  hidden={!props.state.image_url.startsWith("https://")}
                  className="w-full h-60 bg-center bg-cover my-3 rounded shadow"
                  style={{ backgroundImage: `url(${props.state.image_url})` }}
                ></div>
                <FormLabel fontSize={"xl"}>Description</FormLabel>
                <Textarea
                  value={props.state.description}
                  isInvalid={props.state.description === ""}
                  onChange={props.dispatcher}
                  name={"description"}
                  noOfLines={3}
                />

                <FormLabel fontSize={"xl"}>Tags</FormLabel>
                <Input
                  isInvalid={props.state.tags === ""}
                  value={props.state.tags}
                  onChange={props.dispatcher}
                  name={"tags"}
                  type={"text"}
                ></Input>
                <FormHelperText>
                  Separate each tag using , Maximum 5 tags
                </FormHelperText>

                <FormLabel fontSize={"xl"}>Author</FormLabel>
                <Input
                  value={props.state.author}
                  onChange={props.dispatcher}
                  name={"author"}
                  type={"text"}
                  isDisabled
                ></Input>

                <FormLabel fontSize={"xl"}>Public key</FormLabel>
                <Input
                  value={props.state.pubKey}
                  onChange={props.dispatcher}
                  name={"pubKey"}
                  type={"text"}
                  isDisabled
                ></Input>
              </FormControl>
            </div>
            <div className="flex w-full justify-end pr-5 py-5">
              {props.state.markdown ? (
                <Button
                  variant="solid"
                  leftIcon={<IconPencil />}
                  colorScheme={"whatsapp"}
                  onClick={props.onSubmit}
                >
                  Save
                </Button>
              ) : (
                ""
              )}
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default EditorLayout;
