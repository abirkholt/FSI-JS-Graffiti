
// Select some elements....
const header = document.querySelector('#page-header')
header.style.textAlign ='left';

const dogNames = document.querySelectorAll('.dog-name')
for(let i = 0; i < dogNames.length; i++) {
    dogNames[i].style.textAlign = 'left';
}

const dogImages = document.querySelectorAll('.dog-image')
for (let i = 0; i < dogImages.length; i++) {
    dogImages[i].style.rotate = '180deg';
    dogImages[i].style.borderRadius = '50px';
}

const footer = document.querySelector('.footer')
footer.style.color = 'red';

