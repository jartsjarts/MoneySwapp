import {User} from './user';

export class Location {
    id: string;
    name: string;
    lat: number;
    lon: number;

    isMatch(location: Location): boolean
    {
        return location && location.name == this.name;
    }
}

export class Currency {
    iso: string;
    sym: string;

    isMatch(currency: Currency): boolean
    {
        return currency && currency.iso == this.iso;
    }
}

export class Plan {
    id: string;
    userId: string;
    location: Location;
    from: Date;
    to: Date;
    currIn : Currency;
    currOut : Currency;
    amount: number;
    proposedMe: boolean;
    proposedOther: boolean;
    accepted : boolean;

    userReference : User;

    isMatch(plan: Plan): boolean
    {
        return plan
        && this.location 
        && this.location.isMatch(plan.location)
        && this.currIn 
        && this.currIn.isMatch(plan.currOut);
        // TODO: compare converted amounts!!
    }
}

export class PlanMatch {
    planIdSrc: string;
    planIdDst: string;
}