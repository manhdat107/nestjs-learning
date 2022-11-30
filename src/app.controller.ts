import { Body, Controller, Get, Post, Res, UseFilters } from '@nestjs/common';
import { Response } from 'express';
import { CatService } from './cat/cat/cat.service';
import { Cat } from './cat/dto/Cat.dto';
import { ExceptionHandler } from './middleware/exception.handler';

@Controller('cat')
@UseFilters(ExceptionHandler)
export class AppController {
  constructor(private readonly catService: CatService) {}

  @Get('list')
  getCats(@Res() response: Response){
    response.json(this.catService.getCats())
  }

  @Post('add')
  addCat(@Body() cat: Cat) {
      this.catService.addCat(cat);
  }
}
