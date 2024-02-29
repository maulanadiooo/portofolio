import {Elysia} from 'elysia'
import type {RequestHandler} from "@sveltejs/kit";
import {BackendRoutes} from "$lib/Backend/Routes";
import {ResponseApiJson} from "../../../lib/Helper/ResponseApiJson";

const app = new Elysia({prefix: '/api'})
    .use(BackendRoutes)
    .onError(({code, set, error, request}) => {
        if (code === "NOT_FOUND") {
            return ResponseApiJson({
                set: set,
                status: false,
                statusCode: 404,
                code: "ENDPOINT_NOT_FOUND",
                msg: "Endpoint Not Found",
            })
        } else if (code === "VALIDATION") {
            const type = `${error.type.toUpperCase()}_`;
            const errorMessage: string = error.validator.Errors(error.value).First().schema?.error ?? error.validator.Errors(error.value).First()?.message
            return ResponseApiJson({
                set: set,
                status: false,
                statusCode: 400,
                code: `${type}VALIDATION_ERROR`,
                data: {
                    // @ts-ignore
                    field: error.validator.Errors(error.value).First().path.replace("/", ""),
                    msg: errorMessage,
                },
                msg: `Terjadi kesalahan penginputan data, err => ${errorMessage}`,
            })
        } else if (code === "INTERNAL_SERVER_ERROR") {
            return ResponseApiJson({
                set: set,
                status: false,
                statusCode: 400,
                msg: "Internal server error",
                code: "INTERNAL_SERVER_ERROR",
            })
        }
    })

export const POST: RequestHandler = ({request}) => app.handle(request);
export const GET: RequestHandler = ({request}) => app.handle(request);