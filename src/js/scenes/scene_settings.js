import Scene from "../scene";
import { supabase } from "../../sb/client";
import { comment, cont } from "../blocks";
export default class SettingsScene extends Scene {
    constructor() {
        super("Settings scene")
        this.add(comment("Settings Page"))

        this.add(cont([
            this.add(comment("Name")),
            this.add(document.createElement("input")),
        ]))
    }
}