import {Elysia, t} from "elysia";
import {SendMessageToTelegram} from "./Controller";

export const ContactRoutes = new Elysia()
    .group("/contact", app =>
        app
            .post("/", async ({set, body, headers}) => {
                return SendMessageToTelegram({set, headers, body});
            }, {
                body: t.Object({
                    name: t.String(),
                    email: t.String(),
                    phone: t.Number(),
                    message: t.String(),
                    token: t.String(),
                })
            })
    )