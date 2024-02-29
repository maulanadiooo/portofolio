import {Elysia} from "elysia";
import {ContactRoutes} from "./Contact/Routes";

export const BackendRoutes = new Elysia()
    .use(ContactRoutes)


