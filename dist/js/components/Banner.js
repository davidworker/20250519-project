import { Loader } from "./Loader.js";

class Banner {
    static async init(selector) {
        await Loader.html("components/banner.html", selector);
    }
}

export { Banner };
