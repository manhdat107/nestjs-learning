export class Cat {
    name: string;
    age: number
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

}

const cats: Cat[] = [];

export function getCat(): Cat[] {
    return cats;
}

export function addCat(cat: Cat) {
    cats.push(cat);
}