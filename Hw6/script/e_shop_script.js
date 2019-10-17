const ITEMS = ['AMD Ryzen 3', 'Intel Core i3', 'AMD Ryzen 5', 'Intel Core i5', 'AMD Ryzen 7', 'Intel Core i7', 'AMD Ryzen 9', 'Intel Core i9 Coffee Lake Refresh','Intel Core i9 Skylake-X Refresh']
const PRICES = [6000, 11600, 13500, 17500, 25000, 27000, 46800, 36000,145000]
const IDS = ['YD2200C5FBBOX', 'BX80684I39350KF', '100-100000031BOX', 'BX80684I59600K', '100-100000071BOX', 'BX80684I79700K', '100-100000023BOX', 'BX80684I99900K','BX80673I99980X']

let productsDTO = createDTO ()

        function createDTO () {
            let arr = []
            let nodeStr = ''
            for (let i = 0; i < ITEMS.length; i++) {
                arr.push (createProduct (ITEMS[i], PRICES[i], IDS[i]))               
            }
            return arr
        }
        function createProduct (name, price, id) {
            return {
                name: name,
                id: id,
                price: price
            }
        }

        function sum () {
            let sum = 0
            productsDTO.forEach (el => {
                sum += el.price
            })
            console.log (sum)
            return sum
        }

        // function e_eshop(){
        //     let nodeStr = ''

        //     for (let j = 1; j <= 8; j++) {
        //         nodeStr += createProduct()
        //     }
        //     e_shop.innerHTML = nodeStr
        // }
        // e_eshop()


        
/*let store = {
    catalog: [],
    cart: [],
    sum: 0,


    createDTO: function() {
        let nodeStr = ''
        for (let i = 0; i < ITEMS.length; i++) {
            this.catalog.push(this._createProduct(ITEMS[i], PRICES[i], IDS[i]))
        }
    },
    _createProduct: function(name, price, id) {
        return {
            name: name,
            price: price,
            id: id           
        }
    },
    calcSum: function() {
        for (let el of this.catalog) {
            this.sum += el.price
        }
    }

}*/