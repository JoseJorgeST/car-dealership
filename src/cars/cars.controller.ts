/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param,  ParseUUIDPipe, Patch, Post} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dtos/create-car.dto';
import { UpdateCarDTO } from './dtos/update-car.dto';

@Controller('cars')
export class CarsController {

  constructor(private readonly carsService: CarsService){
    
  }

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCardByIs(@Param('id', ParseUUIDPipe) id:string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar( @Body() createCarDTO: CreateCarDTO ){
    return this.carsService.create(createCarDTO)
  }

  @Patch(':id')
  updateCar(  @Param('id', ParseUUIDPipe) id:string, @Body() updateCarDto: UpdateCarDTO ){
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(":id")
  deleteCar( @Param('id', ParseUUIDPipe) id: string  ){
    return this.carsService.delete(id)
  }
}
