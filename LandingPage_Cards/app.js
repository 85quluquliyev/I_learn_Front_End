const body = document.querySelector('body')
const darkButton = document.querySelector('.container-dark')

darkButton.addEventListener('click', () => {
    darkButton.classList.toggle('dark');
    if (darkButton.classList.contains('dark')) {
        body.style = `background-color:#222831; color: black `;
        darkButton.style.backgroundColor = 'white'
    }
    else{
        body.style = `background-color:##f0f0f0; color:#222831 `;
        darkButton.style.backgroundColor = '#222831'
    }
})