function formatValue(value: string | number | boolean): string | number | boolean{
    if(typeof value === 'string'){
        return value.toUpperCase();
    }else if (typeof value === 'number'){
        return value * 10;
    }else (typeof value === 'boolean')
        return !value;

    };




function getLength(value: string | number[]): number {
    if(typeof value === 'string'){
        return value.length;
    }else (Array.isArray(value))
        return value.length;
    };




class Person {
    name : string;
    age : number;

    constructor (name : string , age : number){
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    };
};





function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const result: { title: string; rating: number }[] = [];

    for (let i = 0; i < items.length; i++) {
         if (items[i].rating > 5) {
            console.log("Rating should be between 1 to 5");
            return result;
        }else if (items[i].rating >= 4) {
            result[result.length] = items[i];
        }
    }
    return result;
}






function filterActiveUsers(
  users: { id: number; name: string; email: string; isActive: boolean }[]
): { id: number; name: string; email: string; isActive: boolean }[] {

    const result: { id: number; name: string; email: string; isActive: boolean }[] = [];

    for (let i = 0; i < users.length; i++) {
        if (users[i].isActive) {
            result[result.length] = users[i];
        }
    }

    return result;
}




interface Book {
    title : string ;
    author : string ;
    publishedYear : number;
    isAvailable : boolean;
}

function printBookDetails(book: Book): void {
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? 'Yes' : 'No'}`);
}





function getUniqueValues<T>(array1: T[], array2: T[]): T[] {
    const combined: T[] = [];

    for (let i = 0; i < array1.length; i++) {
        combined[combined.length] = array1[i];
    }

    for (let i = 0; i < array2.length; i++) {
        combined[combined.length] = array2[i];
    }

    const unique: T[] = [];

    for (let i = 0; i < combined.length; i++) {
        let exists = false;

        for (let j = 0; j < unique.length; j++) {
            if (combined[i] === unique[j]) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            unique[unique.length] = combined[i];
        }
    }

    return unique;
}




function calculateTotalPrice(
  products: { name: string; price: number; quantity: number; discount?: number }[]
): number {
  
  return products.reduce((total, product) => {
    const { price, quantity, discount } = product;

    const finalPrice = discount
      ? price * (1 - discount / 100)
      : price;

    return total + finalPrice * quantity;
  }, 0);
}

