import {UserController} from "./controller/UserController";

export const Routes = [{
    method: "get", //a supprimer
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "post",
    route: "/auth/signup",
    controller: UserController,
    action: "signup"
}, {
    method: "get",  //a supprimer
    route: "/auth/signup_test",
    controller: UserController,
    action: "signup_test"
}, {
    method: "post", //a supprimer
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete", //a supprimer
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}];