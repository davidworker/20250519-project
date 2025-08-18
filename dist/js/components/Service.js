import { Loader } from "./Loader.js";

class Service {
    static async init(selector) {
        await Loader.html("components/service.html", selector);
    }
}

export { Service };
