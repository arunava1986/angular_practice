export class Category {
    constructor(
        public CatId:number,
        public CatName:string
    ){
    }
}

export const Categories:Array<Category> = new Array<Category>();
Categories.push(new Category(101, 'C1'));
Categories.push(new Category(102, 'C2'));
Categories.push(new Category(103, 'C3'));

export class Product {
    constructor(
        public PrdId:number,
        public PrdName:string,
        public CatId:number
    ){}
}

export const Products:Array<Product> = new Array<Product>();

Products.push(new Product(1, 'P1', 101));
Products.push(new Product(2, 'P2', 102));
Products.push(new Product(3, 'P3', 103));
Products.push(new Product(4, 'P4', 101));
Products.push(new Product(5, 'P5', 102));
Products.push(new Product(6, 'P6', 103));