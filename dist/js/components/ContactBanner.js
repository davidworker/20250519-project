import { Loader } from "./Loader.js";

class ContactBanner {
    static async init(selector) {
        await Loader.html("components/contact-banner.html", selector);
    }
}

export { ContactBanner };
