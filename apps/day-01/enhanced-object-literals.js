function CreateProductStore(inventory) {
  return {
     inventory, // inventory : inventory

     inventoryValue() {
        return this.inventory.reduce(
           (total, product) => total + product.price, 0);
     },

     getPrice(productId) {
        return this.inventory.find(
           product => product.id === productId).price;
     }
  };
}

const inventory = [
 { id: 1, name: 'Bahubali DVD', price: 399 },
 { id: 2, name: 'Timex watch', price: 1249 }
];

const myProductStore = CreateProductStore(inventory);

console.log(myProductStore.inventoryValue());
console.log(myProductStore.getPrice(2));

