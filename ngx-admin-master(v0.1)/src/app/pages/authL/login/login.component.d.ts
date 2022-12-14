/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthSocialLink } from '../../../../../node_modules/@nebular/auth/auth.options';
import { NbAuthService } from '../../../../../node_modules/@nebular/auth/services/auth.service';
import * as ɵngcc0 from '@angular/core';
export declare class NbLoginComponent {
    protected service: NbAuthService;
    protected options: {};
    protected cd: ChangeDetectorRef;
    protected router: Router;
    redirectDelay: number;
    showMessages: any;
    strategy: string;
    errors: string[];
    messages: string[];
    user: any;
    submitted: boolean;
    socialLinks: NbAuthSocialLink[];
    rememberMe: boolean;
    constructor(service: NbAuthService, options: {}, cd: ChangeDetectorRef, router: Router);
    login(): void;
    getConfigValue(key: string): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbLoginComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NbLoginComponent, "nb-login", never, {}, {}, never, never>;
}

//# sourceMappingURL=login.component.d.ts.map
