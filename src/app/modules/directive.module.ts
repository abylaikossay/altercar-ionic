import {NgModule} from '@angular/core';
import {ThrottleClickDirective} from '../directives/throttle-click.directive';
import { BackgroundImageDirective } from '../directives/background-image.directive';

@NgModule({
    declarations: [
        ThrottleClickDirective,
        BackgroundImageDirective,
    ],
    imports: [],
    exports: [ThrottleClickDirective,
        BackgroundImageDirective],
})
export class DirectiveModule {
}
