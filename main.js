// section-2: adding information to 'customers-card'
const customers = [
    {
        alt    :  'customer-1',
        name   : 'Jane Lee',
        imgSRC : './img/customer-img-1.jpg',
        rating : 3.4
    },
    {
        alt    :  'customer-2',
        name   : 'Bob Smith',
        imgSRC : './img/customer-img-2.jpg',
        rating : 4.7
    },
    {
        alt    :  'customer-3',
        name   : 'Ann Brown',
        imgSRC : './img/customer-img-3.jpg',
        rating : 3.7
    }
]

const customersCardName = document.querySelectorAll('.customers-card-name')
// console.log(customersCardName);
const customersCardRate = document.querySelectorAll('.customers-card-rate')
// console.log(customersCardRate);

for( let customer = 0; customer<customers.length; customer++){
    // adding img to customers-card-name
    let customerImg = document.createElement('img')
    customerImg.setAttribute('src', customers[customer].imgSRC)
    customerImg.setAttribute('alt', customers[customer].alt)
    customersCardName[customer].appendChild(customerImg)

    // adding the name to customers-card-name
    let customerName = document.createElement('h3')
    customerName.innerText = customers[customer].name
    customersCardName[customer].appendChild(customerName)

    // adding the rate
    let rate = (customers[customer].rating * 100)/5;

    if (rate <= 10){
        customersCardRate[customer].innerHTML = `<i class="fa-solid fa-star-half-stroke"></i>`

    }
    else if( 11 <= rate && rate <= 20) {
        customersCardRate[customer].innerHTML = `<i class="fa-solid fa-star"></i>`

    }
    else if (21 <= rate && rate <= 30) {
        customersCardRate[customer].innerHTML = `<i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>`

    } 
    else if (31 <= rate && rate <= 40) {
        customersCardRate[customer].innerHTML = `<i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>`

    } 
    else if (41 <= rate && rate <= 50) {
        customersCardRate[customer].innerHTML = `<i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>`

    } 
    else if (51 <= rate && rate <= 60) {
        customersCardRate.innerHTML = `<i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>`

    } 
    else if (61 <= rate && rate <= 70) {
        customersCardRate[customer].innerHTML = `<i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>`

    } 
    else if (71 <= rate && rate <= 80) {
        customersCardRate[customer].innerHTML = `<i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>`

    } 
    else if (81 <= rate && rate <= 90) {
        customersCardRate[customer].innerHTML = `<i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>`

    } 
    else if (91 <= rate && rate <= 100) {
        customersCardRate[customer].innerHTML = `<i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>`
    }

    customersCardRate[customer].classList.add('icon-style')
}

// section-3
const iconsBtn         = document.querySelectorAll('.card-icon ')
const changeBackground = document.querySelectorAll('.change-background')
const teamInfo         = document.querySelectorAll('.team-info')

for (let i = 0; i < iconsBtn.length; i++) {
    iconsBtn[i].innerHTML = `<i class="fa-solid fa-circle-plus"></i>`
    iconsBtn[i].addEventListener('click', ()=>{
        
        if(iconsBtn[i].innerHTML === `<i class="fa-solid fa-circle-plus"></i>`){
            //show team's information and change the background of the card
            iconsBtn[i].innerHTML = `<i class="fa-solid fa-circle-minus"></i>`
            changeBackground[i].classList.add("change-background-active")
            teamInfo[i].classList.add("team-info-change")
        } else{
            //return to the initial card
            iconsBtn[i].innerHTML = `<i class="fa-solid fa-circle-plus"></i>`
            changeBackground[i].classList.remove("change-background-active")
            teamInfo[i].classList.remove("team-info-change")
        }

    })
    
}

// section-4

// show the form
const inputBtn = document.querySelector('.submit-wrapper')
const showForm = document.querySelector('.form-section form')
const formImg = document.querySelector('.form-section img')
inputBtn.addEventListener('click', ()=>{

    showForm.classList.add('active')
    formImg.classList.add('change-opacity')
    
})
