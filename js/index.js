const handaleCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await res.json()

    const tabContainer = document.getElementById('tab-container')
    data.data.news_category.slice(0, 3).forEach(category => {
        const div = document.createElement('div')
        div.innerHTML = `
            <a onclick ="handaleLoadNews('${category.category_id}')" class="tab">${category.category_name}</a>
        `
        tabContainer.appendChild(div)
    });
}
handaleCategory()

const handaleLoadNews = (categoryId) => {
    console.log(categoryId)
}
handaleLoadNews()

