import { Injectable } from '@angular/core';

export class ConfirmationModel {
    public title: string;
    public message: string;
    public actionBtnTitle: string;
    public closeBtnTitle: string;
    public showOkayBtn: boolean;
}

@Injectable()
export class ConfirmationService {

    constructor() { }

    confirmationConfiguration: ConfirmationModel;

    displayConfirmation(confirmationOptions: ConfirmationModel) {
        this.setConfiguration(confirmationOptions);
    }

    private setConfiguration(configuration: ConfirmationModel) {
        this.confirmationConfiguration = configuration;
    }

    getConfirmationParams() {
        return this.confirmationConfiguration;
    }

}