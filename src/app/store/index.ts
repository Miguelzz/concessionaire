import { Car, cars } from "./cars";

export class Concessionaire {
    private static instance: Concessionaire;
    cars: Car[] = cars;

    public static getInstance(): Concessionaire {
        if (!Concessionaire.instance) {
            Concessionaire.instance = new Concessionaire();
        }

        return Concessionaire.instance;
    }
}