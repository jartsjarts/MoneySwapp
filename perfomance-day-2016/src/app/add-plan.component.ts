import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

import { Validators } from '@angular/forms';
import {Currency, ICurrency} from './currency';
import {Plan} from './plan';
import {CurrencyService} from './currencies.service';

@Component({
    templateUrl: 'add-plan.component.html',
    selector: 'add-plan',
    providers: [CurrencyService]
})
export class AddPlanComponent implements OnInit {
    form: any;
    title: string;
    plan = new Plan();
    currencies: ICurrency[];
    error: any;
    isSameCurrency: boolean;
    
    constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _currencyService: CurrencyService) 
    {
        this.isSameCurrency = true;
        this.plan.currIn = new Currency();
        this.plan.currOut = new Currency();
    }

    ngOnInit() {
        
        this.title = "Add Plan";
        
        this._currencyService.getCurrencies()
            .then(currencies => this.currencies = currencies)
            .catch(error => this.error = error);
        
    }

    selectedCurrInChanged(curr1:string, curr2:string) {
        var index = this.currencies.findIndex(x => x.code == curr1);
        this.plan.currIn = this.currencies[index];
        this.selectedChanged(curr1, curr2);        
    }

    selectedCurrOutChanged(curr1:string, curr2:string) {
        var index = this.currencies.findIndex(x => x.code == curr1);
        this.plan.currOut = this.currencies[index];
        this.selectedChanged(curr1, curr2);       
    }

    private selectedChanged(curr1:string, curr2:string) {
        this.isSameCurrency = curr1 === curr2;        
    }


    // save() {
    //     if (this.id) {
    //         this._userService.editUser(this.user, this.id.toString())
    //             .then(x => {
    //                 this._router.navigate(['/users']);
    //             });
    //     } else {
    //         this._userService.addUser(this.user)
    //             .then(x => {
    //                 this._router.navigate(['/users']);
    //             });
    //     }
    // }
}