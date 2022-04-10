// Create Empty Main Table
export const createTable = (numRows, numCols) => {
    let table = new Array(numRows)
    .fill()
    .map((arr) => new Array(numCols).fill([0,0]));
    return table;
} 


export const knapsackProblem = (items, capacity) => {
    
    let table = createTable(items.length + 1, capacity + 1);
    let item = 0;
    let currCapacity = 0;

    // Bounds to one interation at each call
    function delayedLoop(){
        // This means we're one past the final cell, so just return early to not error out
        if(item === table.length - 1 && currCapacity === table[0].length){
            return [item, currCapacity, table];
        }

        // if both item (row idx) and currCapacity (column idx) are valid...
        if(item < table.length && currCapacity < table[0].length){
            // First row is 0 items, col is 0 capacity => all 0
            if(item === 0 || currCapacity === 0){
                currCapacity++;
                return [item, currCapacity, table];
            }

            // Grab the value/weight of current item (-1 because zero-based)
            const [currValue, currWeight] = items[item - 1];
            // Grab the prevMax that we could have, which is the same capacity but one fewer item
            const prevMaxValue = table[item - 1][currCapacity][0];
            const prevCapacity = table[item - 1][currCapacity][1];

            // If we can fit this item
            if(currWeight <= currCapacity) {
                // Take the item, Potential new value is the current value(taken item) + the value from previous item
                // after subtracting weight of current item from kanpsack
                const potentialValue = currValue + table[item - 1][currCapacity - currWeight][0];
                const potentialCapacity = currWeight + table[item - 1][currCapacity - currWeight][1];

                // Max value is what is higher
                if(potentialValue > prevMaxValue){
                    table[item][currCapacity] = [potentialValue, potentialCapacity];
                } else {
                    table[item][currCapacity] = [prevMaxValue, prevCapacity];
                }

            } else {
                // Can't fit item just take previous max
                table[item][currCapacity] = [prevMaxValue, prevCapacity];
            }
            currCapacity++;

            // at the end of a row, go to next item and start at capacity 1
        } else if(currCapacity >= table[0].length && item < table.length){
            item++;
            currCapacity = 1;
        }
        return [item, currCapacity, table];
    }
    return delayedLoop;
}

