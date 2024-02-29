type IPHeaders =
    'x-real-ip'
    | 'x-client-ip'
    | 'cf-connecting-ip'
    | 'fastly-client-ip'
    | 'x-cluster-client-ip'
    | 'forwarded-for'
    | 'forwarded'
    | 'x-forwarded'
    | 'x-forwarded-for'
    | 'appengine-user-ip'
    | 'true-client-ip'
    | 'cf-pseudo-ipv4'
    | (string & {})

const headersToCheck: IPHeaders[] = [
    'x-real-ip', // Nginx proxy/FastCGI
    'x-client-ip', // Apache https://httpd.apache.org/docs/2.4/mod/mod_remoteip.html#page-header
    'cf-connecting-ip', // Cloudflare
    'fastly-client-ip', // Fastly
    'x-cluster-client-ip', // GCP
    'x-forwarded', // General Forwarded
    'x-forwarded-for',
    'forwarded-for', // RFC 7239
    'forwarded', // RFC 7239
    'appengine-user-ip', // GCP
    'true-client-ip', // Akamai and Cloudflare
    'cf-pseudo-ipv4', // Cloudflare
]

type TCheckIP = {
    headers: any,
    headerToCheck?: IPHeaders
}

export const CheckIp = ({headers, headerToCheck}: TCheckIP): string => {
    const headerString: string[] = Object.keys(headers);
    let ip = "UNKNOWN_IP"
    if (headerToCheck) {
        if (headerString.includes(headerToCheck.toLowerCase())) {
            ip = headers[headerToCheck];
        }
    } else {
        for (const x of headersToCheck) {
            if (headerString.includes(x.toLowerCase())) {
                ip = headers[x];
                break;
            }
        }
    }

    return ip;

}