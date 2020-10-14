import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AccountsService } from "../account.service";
import { LoggingService } from "../logging.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
  providers: [LoggingService], // I don't need to add accountSerrvice here or i overwrite the one in the app componenet
})
export class AccountComponent {
  constructor(
    private loggingService: LoggingService,
    private accountService: AccountsService
  ) {}
  @Input() account: { name: string; status: string };
  @Input() id: number;
  //@Output() statusChanged = new EventEmitter<{id: number;newStatus: string;}>();

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    //this.statusChanged.emit({ id: this.id, newStatus: status });
    this.loggingService.logStatusChange(status);

    this.accountService.statusUpdate.emit(status);
  }
}
