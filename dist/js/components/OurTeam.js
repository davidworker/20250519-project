import { Loader } from "./Loader.js";

class OurTeam {
    static async init(selector) {
        await Loader.html("components/our-team.html", selector);
    }
}

export { OurTeam };
