import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

import {
    WaterlessSharedLibsModule,
    WaterlessSharedCommonModule,
    CSRFService,
    AuthServerProvider,
    AccountService,
    UserService,
    StateStorageService,
    LoginService,
    LoginModalService,
    Principal,
    HasAnyAuthorityDirective,
    JhiSocialComponent,
    SocialService,
    JhiLoginModalComponent
} from './';
import {AccordionModule} from "primeng/primeng";
import {CalendarModule} from "primeng/calendar";

@NgModule({
    imports: [
        WaterlessSharedLibsModule,
        WaterlessSharedCommonModule,
        CalendarModule,
        AccordionModule
    ],
    declarations: [
        JhiSocialComponent,
        JhiLoginModalComponent,
        HasAnyAuthorityDirective
    ],
    providers: [
        LoginService,
        LoginModalService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        AuthServerProvider,
        SocialService,
        UserService,
        DatePipe
    ],
    entryComponents: [JhiLoginModalComponent],
    exports: [
        WaterlessSharedCommonModule,
        JhiSocialComponent,
        JhiLoginModalComponent,
        HasAnyAuthorityDirective,
        DatePipe,
        CalendarModule,
        AccordionModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class WaterlessSharedModule {}
