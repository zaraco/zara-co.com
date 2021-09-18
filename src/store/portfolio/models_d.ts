export type Portfolio = {
    title: string,
    image: string,
    url: string,
    tags: string[],
    buttonText: string
}

export type PortfolioState = {
    portfolio: Portfolio[];
}
