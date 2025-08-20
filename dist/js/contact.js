import { Header } from "./components/Header.js";
import { Favicon } from "./components/Favicon.js";
import { Footer } from "./components/Footer.js";
import { ContactBanner } from "./components/ContactBanner.js";

Header.init("#header-container", "contact");
ContactBanner.init("#banner-container");
Footer.init("#footer-container");
Favicon.init();
