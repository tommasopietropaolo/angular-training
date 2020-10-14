import { Component, EventEmitter, Output } from "@angular/core";
import { AccountsService } from "../account.service";
import { LoggingService } from "../logging.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  //i provide the class of the service so i don't need to instance that manually and i can call from anywhere in the component
  //providers: [LoggingService], // I don't need to add accountSerrvice here or i overwrite the one in the app componenet
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  constructor(
    private loggingService: LoggingService,
    private accountService: AccountsService
  ) {
    this.accountService.statusUpdate.subscribe((status: string) =>
      alert("New Status: " + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    /*
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus,
    });
    instead of this now with account service we can do
    */
    this.accountService.addAccount(accountName, accountStatus);

    /* I import the service and use it in the incorrect way because you don't have to import manualy the instance of the service
    const service = new LoggingService();
    service.logStatusChange(accountStatus);*/
    //instead of this : console.log('A server status changed, new status: ' + accountStatus);
    //this.loggingService.logStatusChange(accountStatus);
  }
}
