class ProductManager {

    constructor() {
        this.products = [];
    };

    addProduct(product) {
        //validar que no haya campos vacíos
        if(product.title === '' || product.description === '' || product.price === '' || product.thumbnail === '' || product.code === '' || product.stock === ''){
            console.error('Missing fields.');
            return false;
        };

        //validar que no se repita el código de producto
        const repeatedCode = this.products.some(item => item.code === product.code);
        if(repeatedCode){
            console.error('Code already exists.');
            return false;
        };

        //asignarle un id al producto
        this.products.length === 0 ? product.id = 1 : product.id = this.products[this.products.length - 1].id + 1;

        //push
        this.products.push(product);
    };

    getProducts(){
        //recuperar todos los productos
        return this.products;
    };

    getProductById(productId){
        //recuperar productos por id
        const product = this.products.find(e => e.id === productId);
        if(!product){
            throw new Error('Not found.')
        }else{
            return product
        };
    };
};

class Product {
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    };
};

//instancia de la clase ProductManager
const manager = new ProductManager;

//devuelve un array vacío
console.log(manager.getProducts());

//se agrega objeto
manager.addProduct(new Product('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25));

//se recupera objetos agregados
console.log(manager.getProducts());

//se repite code de objeto para impedir que se agregue al array
manager.addProduct(new Product('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25));

console.log(manager.getProducts());

//se agrega otro objeto con un campo 
manager.addProduct(new Product('producto 2', '', 100, 'Sin imagen', '456', 5));

manager.addProduct(new Product('producto 3', 'prod 3', 100, 'Sin imagen', '123asd', 5));

console.log(manager.getProducts());
//se recupera objeto por id
console.log(manager.getProductById(1));

//no existe id, arroja error
console.log(manager.getProductById(5));
