import cacheCars from '../cache/cars.json'

export interface Car {
    photo: string;
    model: string;
    year: number;
    brand: string;
    price: number;
}

export const cars: Car[] = cacheCars
