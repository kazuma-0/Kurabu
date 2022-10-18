/* eslint-disable @next/next/no-img-element */
import { Button, Center, Container } from "@chakra-ui/react";
import metaverse from "../assets/logo.png";
import Link from "next/link";
function Footer() {
  return (
    <Container
      id={"footer"}
      maxW={"container.lg"}
      className={"py-5 text-xs font-sans items-center "}
    >
      <div className="flex items-center justify-between pb-5">
        <div className={"cursor-pointer"}>
          <Link title="login"  href="/auth">
              <img src={metaverse.src} width="100px" alt="" />
          </Link>
            <div className={""}>
            </div>
        </div>
        <div className="max-w-lg text-sm space-y-1">
          <h2 className={"text-2xl tracking-wider font-bold font-sofia"}>
            Faculty of Engineering
          </h2>
          <p className="text-lg">KARPAGAM ACADEMY OF HIGHER EDUCATION</p>
          <p>(Deemed to be University)</p>
          <p>
            (Established Under Section 3 of UGC Act, 1956) Pollachi Main Road,
          </p>
          <p>Eachanari Post, Coimbatore - 641 021, Tamil Nadu, India.</p>
            <span>Contact:</span>
            <p>contact@csemetaverse.com</p>
        </div>
      </div>
      {/* ©️{" "}
      <a
        href={"https://github.com/kazuma-0"}
        target={"_blank"}
        rel="noreferrer"
      >
        <Button
          colorScheme={""}
          variant={"link"}
          size={"xs"}
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
          size={"xs"}
          fontWeight={"light"}
        >
          CONTACT
        </Button>
      </a> */}
    </Container>
  );
}

export default Footer;
