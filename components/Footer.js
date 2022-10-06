import { Button, Container } from "@chakra-ui/react";

function Footer() {
  return (
    <Container maxW={"container.lg"} className={"py-5 font-mono"}>
      ©️{" "}
      <a
        href={"https://github.com/kazuma-0"}
        target={"_blank"}
        rel="noreferrer"
      >
        <Button
          colorScheme={""}
          variant={"link"}
          size={"sm"}
          fontWeight={"light"}
        >
          ANUJ S
        </Button>
      </a>{" "}
      <span className={"font-bold "}>|</span>{" "}
      <a href="https://kazuma.in/#contact" target={"_blank"} rel="noreferrer">
        <Button
          variant={"link"}
          colorScheme={""}
          size={"sm"}
          fontWeight={"light"}
        >
          CONTACT
        </Button>
      </a>
    </Container>
  );
}

export default Footer;
