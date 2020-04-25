import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SocketIoModule } from "ngx-socket-io";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    SocketIoModule.forRoot({ url: "http://localhost:3000", options: {} }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
