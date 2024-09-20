
export interface iKey {
    key?: string
}

export interface iText extends iKey {
    text: string;
    keyword?: string[],
}

export interface iImage extends iKey {
    src: string,
    id?: string,
}

export interface iIcon extends iKey {
    name: string,
    tooltip?: string,
}

export interface iLinkIcon extends iIcon{
    link: string,
}

export interface iParagraph extends iKey {
    text: iText,
}

export interface iProject extends iKey {
    image: iImage,
    description: iText,
    techStack: iIcon[]
}

export interface iSkill extends iKey {
    name: string,
    description: string,
    image: iImage,
}

export interface iSummary extends iKey {
    mainText: string,
    secText: string,
    secNumber: number,
    icons: iIcon[],
}
