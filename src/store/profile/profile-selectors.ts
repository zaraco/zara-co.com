import { State } from "../models_d";
import {About, Certificate, Publication} from "./models_d";


const profileSelectors = {
    getAbout: (state: State): About | undefined => state?.profile?.about,
    getCertificates: (state: State): Certificate[] | undefined => state?.profile?.certificates,
    getPublications: (state: State): Publication[] | undefined => state?.profile?.publications,
    getLanguages: (state: State): string[] | undefined => state?.profile?.languages,
}
export default profileSelectors;
