import { State } from "../models_d";
import {About} from "./models_d";


const profileSelectors = {
    getAbout: (state: State): About | undefined => state?.profile?.about,
}
export default profileSelectors;
