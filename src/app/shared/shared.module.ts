import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';
import {LoginService} from '../login/login.service';
import {StateStorageService} from './auth/state-storage.service';
import {Principal} from './auth/principal.service';
import {AuthServerProvider} from './auth/auth.service';

// import {
//     // RecruitmentAppSharedLibsModule,
//     // RecruitmentAppSharedCommonModule,
//     // CSRFService,
//     AuthServerProvider,
//     AccountService,
//     UserService,
//     StateStorageService,
//     LoginService,
//     LoginModalService,
//     Principal
//    // HasAnyAuthorityDirective,
//    // JhiLoginModalComponent
// } from './';

@NgModule({
    imports: [
        ///RecruitmentAppSharedLibsModule,
       // RecruitmentAppSharedCommonModule
    ],
    declarations: [
       // JhiLoginModalComponent,
       // HasAnyAuthorityDirective
    ],
    providers: [
        LoginService,
        // LoginModalService,
        StateStorageService,
        Principal,
       // CSRFService,
        AuthServerProvider,
        // UserService,
       // DatePipe
    ],
   // entryComponents: [JhiLoginModalComponent],
    exports: [
        // RecruitmentAppSharedCommonModule,
       // JhiLoginModalComponent,
        // HasAnyAuthorityDirective,
       // DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SharedModule {}
