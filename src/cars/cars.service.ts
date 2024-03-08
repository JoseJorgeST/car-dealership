/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './Interfaces/car.interface';
import {v4 as uuid} from 'uuid'
import { CreateCarDTO } from './dtos/create-car.dto';
import { UpdateCarDTO } from './dtos/update-car.dto';

@Injectable()
export class CarsService {
    [x: string]: any;
    private cars: Car[] = [
        {
            id: uuid(),
            brand: "Toyota",
            model: 'corolla'
        },
        {
            id: uuid(),
            brand: "Honda",
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: "Jeep",
            model: 'Cherokee'
        }
    ];

    findAll(){
        return this.cars
    }

    findOneById(id:string){
        const car = this.cars.find( car => car.id === id);
        if(!car) throw new NotFoundException("No existe ese usuario")
        
        return car;
    }

    create( createCarDTO:CreateCarDTO ){
        const newCar: Car = {
            id: uuid(),
            ...createCarDTO,
          };
      
          this.cars.push(newCar);
        return newCar;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    update( id: string, updateCarDto: UpdateCarDTO){
        
        let carDB = this.findOneById(id);
        this.cars = this.cars.map( car => {
            if ( car.id === id){
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id,
                }
                return carDB
            }
            return car;
        })
        
        return carDB;
    }

    delete(id: string){
        const car = this.findOneById(id);

        this.cars = this.cars.filter(car => car.id !== id);
        
    }
}
