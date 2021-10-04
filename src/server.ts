import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";

http.listen(3333, () => console.log("Keep Calm Server is online :-P Port 3333 !!"));