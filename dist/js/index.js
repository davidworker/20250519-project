import { Header } from "./components/Header.js";
import { Favicon } from "./components/Favicon.js";
import { Footer } from "./components/Footer.js";
import { Banner } from "./components/Banner.js";
import { Service } from "./components/Service.js";
import { OurTeam } from "./components/OurTeam.js";
import { SupportContact } from "./components/SupportContact.js";

Header.init("#header-container", "index");
Banner.init("#banner-container");
Service.init("#service-container");
OurTeam.init("#our-team-container");
SupportContact.init("#support-contact-container");
Footer.init("#footer-container");
Favicon.init();
