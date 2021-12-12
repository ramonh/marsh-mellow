export default class ShoppingCart {
    items ?;

    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items = [...this.items, item]
        return this;
    }

    total() {
        return this.items.reduce((x, y) => x + y.priceCents, 0);
    }
}