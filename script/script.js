// for category button
function loadCategories(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res=>res.json())
    .then(data=>displayCategories(data.categories))
}

function displayCategories(categories){
    const categoryContainer=document.getElementById('category-container')
    for(cat of categories){
        const categoryDiv=document.createElement('div')
        categoryDiv.innerHTML=`
        <button class="btn">${cat.category}</button>
        `
        categoryContainer.appendChild(categoryDiv)
    }
}

















loadCategories()
