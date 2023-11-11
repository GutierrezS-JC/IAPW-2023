import OpenAPIClientAxios from "openapi-client-axios";
import { Client } from "./openapi";

const api = new OpenAPIClientAxios({
    definition: "http://localhost:3000/openapi.json",
});
api.init();
export const client = await api.init<Client>();
