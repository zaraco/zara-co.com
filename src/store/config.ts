const BASE_URL = process?.env?.REACT_APP_API_BASE_URL;

const config = {
    BASE_URL: BASE_URL,
    PROFILE_URL: `${BASE_URL}/json/profile.json`
}

export default config;
