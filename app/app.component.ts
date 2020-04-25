import { Component } from "@angular/core";
import { Socket } from "ngx-socket-io";

@Component({ selector: "app-root", template: "<h1>Hellow World</h1>" })
export class AppComponent {
  constructor(private socket: Socket) {
    this.socket.emit("message", "hello from frontend");
    this.socket.on("message", (msg) =>
      console.log("message from backend: ", msg)
    );
  }
}
