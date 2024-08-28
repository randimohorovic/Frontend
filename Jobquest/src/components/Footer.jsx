import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-cyan-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-col-1">
          <div className="mt-5">
            <Link to="/" className=" ">
              <h1 className="font-bold text-lg sm:text-xl">
                <span className="px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white">
                  Jobquest
                </span>
              </h1>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8  mt-4 sm:grid-cols-3 sm:gp-6">
            <div>
              <Footer.Title title="Pišite nam" />
              <Footer.LinkGroup col>
                <Footer.Link href="mailto:jobquest@gmail.hr.com" target="blank">
                  jobquest@gmail.hr
                </Footer.Link>
                <Footer.Link
                  href="mailto:jobquest_reply@gmail.hr.com"
                  target="blank"
                >
                  jobquest_reply@gmail.hr
                </Footer.Link>
                <Footer.Link href="mailto:support@jobquest.com" target="blank">
                  support@jobquest.com
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Zaprati nas" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/randimohorovic/"
                  target="blank"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="/" target="blank">
                  Facebook
                </Footer.Link>
                <Footer.Link href="/" target="blank">
                  Instagram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="O nama" />
              <Footer.LinkGroup col>
                <Footer.Link href="/about" target="blank">
                  Sta smo mi?
                </Footer.Link>
                <Footer.Link href="/" target="blank">
                  Vise informacija
                </Footer.Link>
                <Footer.Link href="/" target="blank">
                  Nadi nas
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by={" JobQuest "}
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
