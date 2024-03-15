import { NgModule } from "@angular/core";
import { PhonePipe } from './phone.pipe';
import { AddressPipe } from './address.pipe';
import { StatusPipe } from './status.pipe';
import { DashIfEmptPipe } from './dash-if-empt.pipe';

@NgModule({
    declarations: [
        PhonePipe,
        AddressPipe,
        StatusPipe,
        DashIfEmptPipe
    ],
    imports: [
        
    ],
    exports: [
        PhonePipe,
        AddressPipe,
        StatusPipe,
        DashIfEmptPipe
    ],
})
export class PipesModule {
}
