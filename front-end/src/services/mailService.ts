export function sendMail(data: any): Promise<any> {
    return fetch('/api/messages', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'vary': 'Origin',
        },
        body: JSON.stringify(data),
    })
}