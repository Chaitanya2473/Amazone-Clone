const handleSignIn = () => {
    var inpEmail = document.getElementById('inpEmail').value
    var inpPwd = document.getElementById('inpPwd').value

    var noEmail = document.getElementById('noEmail')
    var wrongEmail = document.getElementById('wrongEmail')
    var noPwd = document.getElementById('noPwd')
    var wrongPwd = document.getElementById('wrongPwd')

    if (inpEmail && inpPwd) {
        if (inpEmail === 'chaitanya@gmail.com' && inpPwd === '12345') {
            document.location = "./index.html"
        } else {
            if (inpEmail != 'chaitanya@gmail.com') {
                wrongEmail.style.display = 'block'
            }
            if (inpPwd != '12345') {
                wrongPwd.style.display = 'block'
            }
        }
    } else {
        if (!inpEmail) {
            noEmail.style.display = 'block'
        }
        if (!inpPwd) {
            noPwd.style.display = 'block'
        }
    }
}

const handleEnterEmail = () => {
    var noEmail = document.getElementById('noEmail')
    var wrongEmail = document.getElementById('wrongEmail')

      wrongEmail.style.display = 'none'
       noEmail.style.display = 'none'

}

const handleEnterPwd = () => {
    
    var noPwd = document.getElementById('noPwd')
    var wrongPwd = document.getElementById('wrongPwd')


       wrongPwd.style.display = 'none'
        noPwd.style.display = 'none'
}
const handleOpenSidebar = () => {
  var sidebar = document.getElementById('sidebar')
  sidebar.style.display = 'block'   
}

const handleCloseSidebar = () => {
    
    var sidebar = document.getElementById('sidebar')
    sidebar.style.display = 'none'
}

// const something = () => {
//      var sidebar = document.getElementById('sidebar')

//      if ( sidebar.style.display == 'block') {
//          sidebar.style.display = 'none'
//      }else{
//          sidebar.style.display = 'block'
        
//      }
//     }

// fetch("https://dummyjson.com/products")
// .then(res => res.json())
// .then(data => {
//     // console.log(data);
   
// })
// .catch(err=>{
//     console.log(err);
// })

$.ajax({
  url: 'https://dummyjson.com/products',
  type: 'get',
  dataType: 'json',
  success: function (data) {
   

    for (let i = 0; i < data.products.length; i++) {

    
        // const mainDiv = document.createElement('div')
        // mainDiv.setAttribute('class','oneProduct')

        // const categoryTag = document.createElement('p')
        // const categoryContent = document.createTextNode(data.products[i].category)
        // categoryTag.appendChild(categoryContent)
        // categoryTag.setAttribute('class','category')

       const oneProduct = `
    
            <div class="oneProduct">
          <p>${data.products[i].category}</p>
            
 <img src="${data.products[i].images[0]}" alt="${data.products[i].images[0]}">

            <div class="ratingAndPrice">
               
                <h1>&#x20B9;${data.products[i].price}</h1>

               
                <h3>Rating:${data.products[i].rating}</h3>
            </div>

           
            <h2>${data.products[i].title}</h2>

            <!-- product description -->
            <h4>
               ${data.products[i].description}
            </h4>

            <!-- button -->
            <button>Add to Cart</button>
        </div>

       
            `
            $('#products').append(oneProduct)
        // mainDiv.append(oneProduct)
    }

  },
  error: function (error) {
        console.log(error)
 },
 always: function (){
}
})