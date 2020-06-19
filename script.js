const textHeader = document.querySelectorAll('.text-header');
textHeader.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('extended-list')
        const list = item.nextElementSibling;
        list.classList.toggle('none');
    })
})