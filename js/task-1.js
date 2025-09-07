// products — об’єкт, у якому ключі містять назви товарів, а їхні значення — кількість цих товарів. 
// Наприклад, { apples: 2, grapes: 4 }.
// containerSize — число, максимальна кількість одиниць товарів, яку в себе може вмістити контейнер.

function isEnoughCapacity(products, containerSize) {
    let totalAmound = 0;
    const qualityOfProducts = Object.values(products)
    for (const quality of qualityOfProducts) {
        totalAmound += quality
    }
    return totalAmound <= containerSize
}

console.log(
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
);
console.log(
    isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
);

console.log(
    isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
);
console.log(
    isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); 