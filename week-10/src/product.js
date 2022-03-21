const products = require('../api/data/products.json');

const getAll = ({ id, name, description, price}) =>
    new Promise((resolve) => {
        let data = products;

        if(id) {
            data = data.filter((item) => item.id === id);
        }

        if (name) {
            data = data.filter((item) => item.name === name);
        }
      
        if (description) {
            data = data.filter((item) => item.description === description);
        }
    
        if (price) {
            data = data.filter((item) => item.price === Number(price));
        }

        resolve({ code: 200, data: JSON.stringify(data)})
})

const getById = (productId) => 
    new Promise((resolve) => {

        const product = products.find((product) => product.id === productId);

        if (product) {
            resolve({ code: 200, data: JSON.stringify(product)});
        } else {
            resolve({
                code: 404,
                data: { message: `No product found for id ${id}` },
            });
        }
})

module.exports = {
    getAll,
    getById
}