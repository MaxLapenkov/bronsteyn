const textHeader = document.querySelectorAll('.text-header');
textHeader.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('extended-list')
        const list = item.nextElementSibling;
        list.classList.toggle('none');
    })
})
const impressum = document.querySelector('.impressum'),
      impressumOpen = document.getElementById('impressum-open'),
      impressumClose = document.querySelector('.impressum-close');
      impressumClose.addEventListener('click', () => {
          impressum.classList.add('none');
          document.querySelector('body').style.overflow = 'auto';
      })
      impressumOpen.addEventListener('click', () => {
          impressum.classList.remove('none');
          impressum.style.top = `${window.pageYOffset}px`;
          document.querySelector('body').style.overflow = 'hidden';
      })
const dsgvo= document.querySelector('.dsgvo'),
        dsgvoOpen = document.getElementById('dsgvo-open'),
        dsgvoClose = document.querySelector('.dsgvo-close');
        dsgvoClose.addEventListener('click', () => {
            dsgvo.classList.add('none');
            document.querySelector('body').style.overflow = 'auto';
            })
            dsgvoOpen.addEventListener('click', () => {
                dsgvo.classList.remove('none');
                dsgvo.style.top = `${window.pageYOffset}px`
                document.querySelector('body').style.overflow = 'hidden';
            })