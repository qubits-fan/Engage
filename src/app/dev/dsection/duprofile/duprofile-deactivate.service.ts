import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';


export interface DuprofileDeactivationInterface {
      canDeactivate: () => Observable<boolean> |  Promise<boolean> | boolean;
}

export  class  DuprofileDeactivateService implements  CanDeactivate<DuprofileDeactivationInterface>{
        canDeactivate(component: DuprofileDeactivationInterface,
                      currentRoute: ActivatedRouteSnapshot,
                      currentState: RouterStateSnapshot,
                      nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
             return component.canDeactivate();
        }
}
