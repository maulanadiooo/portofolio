import type {Context} from "elysia";


export type TResponseApiJson = {
    set: Context['set'],
    statusCode: number,
    code: string,
    msg: string,
    status: boolean,
    data?: any,
    error?: any | null,

}

export type TReturnResponseJson = {
    status: boolean,
    code: string,
    message: string,
    data: object | null,
}

export const ResponseApiJson = ({
                                    set,
                                    statusCode,
                                    msg,
                                    status,
                                    code,
                                    data = null,
                                    error = null,
                                }: TResponseApiJson): TReturnResponseJson => {
    if (error !== null) {
        //     TODO: SEND DISCORD
    }
    set.status = statusCode;
    set.headers["Content-Type"] = "Application/json";

    return {
        status,
        code,
        message: msg,
        data,
    }
}

export const ReturnCatchError = (e: any, set: Context['set']): TReturnResponseJson => {
    return ResponseApiJson({
        set: set,
        msg: `Error ${e.message}`,
        statusCode: 400,
        status: false,
        code: "UNKNOWN_ERROR",
        error: e,
    })
}