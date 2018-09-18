import Link from "next/link";
import H1 from "../components/h1";
import H2 from "../components/h2";
import UL from "../components/ul";
import LI from "../components/li";
import Pa from "../components/pa";
import P from "../components/p";
import Wrapper from "../components/wrapper";
import Strong from "../components/strong";

export default () => (
  <Wrapper>
    <H1>Jhonny Jose Arana Nieves</H1>
    <UL>
      <LI>
        <Pa>
          Email:{" "}
          <a href="mailto:aranajhonny@outlook.com">aranajhonny@outlook.com</a>
        </Pa>
      </LI>
      <LI>
        <Pa>
          Twitter:{" "}
          <a target="_blank" href="https://twitter.com/aranajhonny">
            @aranajhonny
          </a>
        </Pa>
      </LI>
      <LI>
        <Pa>
          Github:{" "}
          <a target="_blank" href="https://github.com/aranajhonny">
            aranajhonny
          </a>
        </Pa>
      </LI>
    </UL>

    <H2>Projects</H2>
    <UL>
      <LI>
        <Pa>
          <a target="_blank" href="https://github.com/aranajhonny/ig-upload">
            <Strong>ig-upload</Strong>
          </a>{" "}
          A tiny command line tool for upload images to instagram (2017)
        </Pa>
      </LI>
    </UL>
    <H2>I'm interested</H2>
    <UL>
      <LI>
        <Pa>Machine Learning</Pa>
      </LI>
    </UL>
    <UL>
      <LI>
        <Pa>Psychology</Pa>
      </LI>
    </UL>

    <UL>
      <LI>
        <Pa>Web development</Pa>
      </LI>
    </UL>

    <UL>
      <LI>
        <Pa>Hackintosh</Pa>
      </LI>
    </UL>

    <UL>
      <LI>
        <Pa>Open source</Pa>
      </LI>
    </UL>
    <UL>
      <LI>
        <Pa>Containers and Gnu/Linux Distros</Pa>
      </LI>
    </UL>

    <H2>Archive</H2>
    <UL>
      <LI>
        <Link prefetch href="/hackintosh">
          <a className="links">
            My experience using hackintosh low-end PC for 3 years (June 10,
            2017)
          </a>
        </Link>
      </LI>
    </UL>
    <style jsx>{`
      .links {
        font-size: 16px;
      }
      a {
        color: #0366d6;
        text-decoration: none;
      }
      a:hover {
        background: #0366d6;
        color: #fff;
        text-decoration: none;
      }
    `}</style>
  </Wrapper>
);
