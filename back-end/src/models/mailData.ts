export interface MailDataDto {
    email: string,
    firstName: string,
    lastName: string,
    message: string,
    servicesRequested: ServicesRequestedDto
}

export interface ServicesRequestedDto {
    website: boolean,
    consulting: boolean,
    webapp: boolean,
    hosting: boolean
}