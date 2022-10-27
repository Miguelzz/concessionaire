import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Concessionaire } from 'src/app/store';
import { Car } from 'src/app/store/cars';
import { } from '../../actions/cars';

@Component({
    selector: 'app-cars',
    templateUrl: './index.html',
    styleUrls: ['./index.scss']

})
export class CarsComponent {
    cars$: Observable<Car[]>;

    constructor(private store: Store<Concessionaire>) {
        this.cars$ = store.select('cars');
    }

    // increment() {
    //     this.store.dispatch(increment());
    // }

    // decrement() {
    //     this.store.dispatch(decrement());
    // }

    // reset() {
    //     this.store.dispatch(reset());
    // }
}
