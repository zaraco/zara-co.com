import { State } from "../models_d";
import {About, Certificate, Education, Hobby, Language, Publication, Social} from "./models_d";


const profileSelectors = {
    getAbout: (state: State): About | undefined => state?.profile?.about,
    getCertificates: (state: State): Certificate[] | undefined => state?.profile?.certificates,
    getPublications: (state: State): Publication[] | undefined => state?.profile?.publications,
    getLanguages: (state: State): Language[] | undefined => state?.profile?.languages,
    getHobbies: (state: State): Hobby[] | undefined => state?.profile?.hobbies,
    getEducation: (state: State): Education[] | undefined => state?.profile?.education,
    getSocial: (state: State): Social[] | undefined => state?.profile?.social,
}
export default profileSelectors;
