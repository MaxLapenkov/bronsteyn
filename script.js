const textHeader = document.querySelectorAll('.text-header');
// textHeader.forEach(item => {
//     item.addEventListener('click', () => {
//         const list = item.nextElementSibling;
//         list.classList.toggle('none');
//     })
// })
const mainItems = document.querySelectorAll('.main-item');
mainItems.forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target.classList.contains('main-item')) {
            item.classList.toggle('extended-list')
            const list = item.querySelector('.next-list')
            list.classList.toggle('none');
        } 
    })
    const secondaryItems = item.querySelectorAll('.secondary-item')
    secondaryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target.classList.contains('secondary-item')) {
                item.classList.toggle('extended-list')
                const list = item.querySelector('.next-list')
                list.classList.toggle('none');
            }; 
        })
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
const loginBtn = document.querySelector('.login-button'),
      signupBtn = document.querySelector('.signup-button'),
      loginStatus = document.querySelector('.login-status'),
      signupStatus = document.querySelector('.signup-status');
     
      if(loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault()
            loginStatus.textContent = 'Login/password incorrect'
        });
      }
      if(signupBtn) {
        signupBtn.addEventListener('click', (e) => {
            e.preventDefault()
            signupStatus.textContent = 'Login/password incorrect'
        })
      }
         