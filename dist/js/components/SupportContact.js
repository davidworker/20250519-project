import { Loader } from "./Loader.js";

class SupportContact {
    static async init(selector) {
        await Loader.html("components/support-contact.html", selector);
    }
}

export { SupportContact };
