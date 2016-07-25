import { Component, AfterViewInit, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { ConfirmationService, ConfirmationModel } from './confirmation.service';

@Component({
    moduleId: module.id,
    selector: 'confirmation',
    styleUrls: ['./confirmation.style.css'],
    templateUrl: 'confirmation.component.html'
})
export class ConfirmationComponent implements AfterViewInit {
    @Output() manageUserInteration = new EventEmitter();

    confirmationParameters: ConfirmationModel;
    confirmationTitle: string;
    confirmationMessage: string;
    actionBtnTitle: string;
    closeBtnTitle: string;
    showOkayBtn: boolean;

    constructor(
        private _confirmationService: ConfirmationService, 
        private _cdr: ChangeDetectorRef) {}

    close() {
        this.manageUserInteration.emit({
            value: false
        })
    }

    performAction() {
        this.manageUserInteration.emit({
            value: true
        });
    }

    ngAfterViewInit() {
        this.confirmationParameters = this._confirmationService.getConfirmationParams();
        this.confirmationTitle = this.confirmationParameters.title;
        this.confirmationMessage = this.confirmationParameters.message;
        this.actionBtnTitle = this.confirmationParameters.actionBtnTitle;
        this.closeBtnTitle = this.confirmationParameters.closeBtnTitle;
        this.showOkayBtn = this.confirmationParameters.showOkayBtn;
        this._cdr.detectChanges();
    }
}