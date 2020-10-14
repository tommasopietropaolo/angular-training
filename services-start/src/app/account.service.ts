import { EventEmitter, Injectable } from "@angular/core";
import { stringify } from "querystring";
import { LoggingService } from "./logging.service";

@Injectable() // add it to each service where we want to inject a service (in new angular on each services), we need this because there isn't any meta-data in this class
export class AccountsService {
  accounts = [
    {
      name: "Master Account",
      status: "active",
    },
    {
      name: "Testaccount",
      status: "inactive",
    },
    {
      name: "Hidden Account",
      status: "unknown",
    },
  ];

  //it's more easly to  provide some event which we can trigger in one component and listen to in another.
  statusUpdate = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}
  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
