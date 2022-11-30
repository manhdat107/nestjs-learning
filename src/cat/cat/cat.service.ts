import { Injectable } from '@nestjs/common';
import { addCat, Cat, getCat } from '../dto/Cat.dto';

@Injectable()
export class CatService {
    
    getCats(): Cat[] {
        return getCat();
    }

    addCat(cat: Cat) {
        addCat(cat);
    }
}
