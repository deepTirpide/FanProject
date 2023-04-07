import { LightningElement } from 'lwc';

import fanOffImageUrl from '@salesforce/resourceUrl/fan';
import fanOnImageUrl from '@salesforce/resourceUrl/fanstill';

export default class FanSwitch extends LightningElement {
    fanOn = false;
    fanImageUrl = fanOffImageUrl;

    get buttonLabel() {
        return this.fanOn ? 'Turn ON Fan' : 'Turn OFF Fan';
    }

    toggleFan() {
        this.fanOn = !this.fanOn;
        this.fanImageUrl = this.fanOn ? fanOnImageUrl : fanOffImageUrl;
    }
    
    
}