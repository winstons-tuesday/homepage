export interface CardData {
    title: string;
    blurb: string;
    icon: string[];
}
export const SERVICES_CARDS_DATA: CardData[] = [
    {
        title: 'Websites',
        blurb: `Create a new website or update an existing one using
        popular frameworks like Wordpress or just native HTML, CSS and
        JavaScript. SINGLE SIGN ON.`,
        icon: ['fas', 'desktop'],
    },
    {
        title: 'Consulting',
        blurb: `Let us put our years of web knowledge to work for you
        in order to help your project meet your requirements and 
        expectations`,
        icon: ['fas', 'headset'],
    },
    {
        title: 'Web Apps',
        blurb: `Have an idea for a browser based application? We are experienced in creating and maintaining modern web apps using 
        popular technologies such as Node.js, C# .NET, and React.js`,
        icon: ['fas', 'laptop-code'],
    },
    {
        title: 'Web Hosting',
        blurb: `Hosting on popular cloud based solutions such as AWS, Microsoft Azure or Digitalocean`,
        icon: ['fas', 'upload'],
    }
]