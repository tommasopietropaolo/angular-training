import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AccountComponent } from "./account/account.component";
import { NewAccountComponent } from "./new-account/new-account.component";
import { AccountsService } from "./account.service";
import { LoggingService } from "./logging.service";

@NgModule({
  declarations: [AppComponent, AccountComponent, NewAccountComponent],
  imports: [BrowserModule, FormsModule],
  providers: [AccountsService, LoggingService], //if we provide a service here we can inject a service in a service only if i provide in app module
  bootstrap: [AppComponent],
})
export class AppModule {}
