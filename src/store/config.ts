const BASE_URL = process?.env?.REACT_APP_API_BASE_URL;

const config = {
    BASE_URL: BASE_URL,
    PROFILE_URL: `${BASE_URL}/json/profile.json`,
    EXPERIENCE_URL: `${BASE_URL}/json/experience.json`,
    SKILLS_URL: `${BASE_URL}/json/skills.json`,
    PORTFOLIO_URL: `${BASE_URL}/json/portfolio.json`,
    GOOGLE_ANALYTICS_ID: process?.env?.REACT_APP_GOOGLE_ANALYTICS_ID ?? ''
}

export default config;
