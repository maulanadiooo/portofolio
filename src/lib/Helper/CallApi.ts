interface ICallApi {
    url: string,
    data?: object,
    method: 'POST' | 'GET' | 'PATCH' | 'PUT',
}

interface IReturnCallApi {
    status: boolean,
    msg: string,
    data?: object | null,
}

export const CallApi = async ({url, data, method}: ICallApi): Promise<IReturnCallApi> => {
    try {
        let response;
        if (method === 'GET') {
            response = await fetch(url, {
                method,
                headers: {"Content-Type": "application/json"},
            })
        } else {
            response = await fetch(url, {
                method,
                body: JSON.stringify(data),
                headers: {"Content-Type": "application/json"},
            })
        }


        const responseBody = await response.json();
        if (response.status !== 200) {
            return {
                status: false,
                msg: responseBody.message ?? 'UNKNOWN MESSAGE',
            }
        }
        return {
            status: true,
            msg: responseBody.message,
        }
    } catch (e: any) {
        return {
            status: false,
            msg: e.message ?? 'Something bad happened',
        }
    }

}