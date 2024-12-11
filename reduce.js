function countCategories(categories) {
    const categoryCounts = categories.reduce((acc, category) => {
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});

    return categoryCounts; 
}


function sortCategoriesByCount(categories) {
    const categoryCounts = countCategories(categories);

    
    const sortedCategories = Object.entries(categoryCounts)
        .sort((a, b) => b[1] - a[1]) 
        .map(entry => entry[0]);    

    return sortedCategories;
}


const input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

const counts = countCategories(input);
console.log(counts);

const sortedCategories = sortCategoriesByCount(input);
console.log(sortedCategories);