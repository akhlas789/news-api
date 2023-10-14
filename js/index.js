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

const handaleLoadNews = async (categoryId) => {
    const res = await fetch(` https://openapi.programming-hero.com/api/news/category/${categoryId}`)
    const data = await res.json()

    const cardContainer = document.getElementById('card-container')

    cardContainer.innerHTML = ' '

    data.data.forEach(news => {
        // console.log(news)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card bg-base-100 shadow-xl">
            <figure><img src="${news.image_url}" /></figure>
            <div class="card-body">
                <h2 class="card-title">${news.title.slice(0, 45)}</h2>
                <p>${news.details.slice(0, 300)}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        `
        cardContainer.appendChild(div)
    })
}
handaleLoadNews()

const handaleModal = (data) => {
    const div = document.createElement('div')
    div.innerHTML = `
    <button class="btn" onclick="my_modal_1.showModal()">open modal</button>
    <dialog id="my_modal_1" class="modal">
    <div class="modal-box">
        <h3 class="font-bold text-lg">Hello!</h3>
        <p class="py-4">Press ESC key or click the button below to close</p>
        <div class="modal-action">
        <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Close</button>
        </form>
        </div>
    </div>
    </dialog>
    `
}
handaleModal()