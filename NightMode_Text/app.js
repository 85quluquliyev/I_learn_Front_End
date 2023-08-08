const body = document.querySelector('body')
const darkButton = document.querySelector('.dark-container')

darkButton.addEventListener('click', () =>{
    darkButton.classList.toggle('dark');
    if (darkButton.classList.contains('dark')) {
        body.style= `background-color: #222831; color:#f0f0f0`;
        darkButton.style=`background-color: #f0f0f0;`
    }
    else{
        body.style = `background-color: #fdfdfd; color:black`;
        darkButton.style=`background-color: #222831;`
    }
})