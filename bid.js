const loginBtn=document.getElementById("login");
loginBtn.addEventListener("click",()=>{
    // console.log("login")
    window.location.href="bidlogin.html";

// loginBtn.addEventListener("click",()=>{
//     window.open("bidlogin.html","_blank")

// })
});
const SignupBtn=document.getElementById("signup");

SignupBtn.addEventListener("click",()=>{
    window.location.href="BidSignup.html";
// console.log("btn");
    SignupBtn.addEventListener("click",()=>{
        window.open=("BidSignup.html","_blank");
    })
});

const UpFree=document.getElementById("SignUpfree");
UpFree.addEventListener("click",()=>{
    window.location.href="BidSignup.html";
    // window.open("BidSignup.html","#")
})
 

const AuctionsNow=document.getElementById("AuctionsNow");
AuctionsNow.addEventListener("click",()=>{
    window.location.href="bid.html";
});

const FirstBid=document.getElementById("FirstBid");
FirstBid.addEventListener("click",()=>{
    window.location.href="bidlogin.html";
});

//  const Apps= document.querySelectorAll("Mediaapp")
// Apps.forEach(button=>{
//     button.addEventListener("click",()=>{
//     window.location.href="bid.html";
// })
// });



 const questions=document.querySelectorAll('.Question');

 questions.forEach((q)=>{
q.addEventListener("click",()=>{

    questions.forEach((item)=>{
        if(item!== q){
            item.classList.remove('active');
            item.nextElementSibling.style.display='none';
    //          setTimeout(() => {
    //     q.classList.remove('active');
    //   }, 5000);
        }
    });

    q.classList.toggle('active');
    const answer=q.nextElementSibling;
    answer.style.display=q.classList.contains('active')?'block':'none';
})
 });











// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())            
//             .then(json=>console.log(json))

//             .catch(error=>{
//                 console.error('Error:',error);
//             });


// async function getData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// getData();


//                                                API FETCH EASY IN WAY

// fetch('https://fakestoreapi.com/products')
// .then((data)=>{
//     console.log(data);
//     return data.json();
// })
// .then((completedata)=>{
//     console.log(completedata);
//     let data1="";
//     completedata.map((values)=>{
//         data1 +=` <div class="cards">
//         <h1 class="title">${values.title}</h1>
//                  <img class="img" src=${values.image} alt="">
//                 <button class="btn-closed">Buy</button>
              
//             </div>`
//     });
//     document.getElementById("parts").innerHTML=data1
// })

// .catch((err)=>{
//     console.log("err");
// })






























 
                        // APi Fetch and pagination

let allProducts = []; // Store all fetched products
let filteredProducts=[];
 let currentpage=1;
          const itemPerPage=4; 
// Fetch products from API
fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(data => {
    allProducts = data;
 filteredProducts=[...allProducts]; // initially show all
    showPage(currentpage);

})
.catch(err => console.log(err));
// function renderProducts(page)

function showPage(page){
    const start= (page-1)* itemPerPage;
    const end= start + itemPerPage;
    const paginatedItems= filteredProducts.slice(start,end);

    renderProducts(paginatedItems);
    updatePaginationInfo();
}

// Function to render products
function renderProducts(products) {
    let data1 = "";
    products.map((values) => {
        data1 += `
        <div class="cards">
            <h1 class="title">${values.title}</h1>
            <img class="img" src="${values.image}" alt="">
            <button class="btn-closed">Buy</button>
        </div>`;
    });
    document.getElementById("parts").innerHTML = data1;
}

function updatePaginationInfo(){
    const totalPages=Math.ceil(filteredProducts.length/itemPerPage);
    document.getElementById("page-info").textContent=`Page ${currentpage} of ${totalPages}`;
    document.getElementById("prev").disabled=(currentpage===1);
      document.getElementById("next").disabled=(currentpage===totalPages);
}
// prev and next btn 
let prev=document.getElementById("prev").addEventListener("click",()=>{
    if(currentpage>1 ){
        // disabled;
        currentpage--;
        showPage(currentpage);
    }


})
document.getElementById("next").addEventListener("click",()=>{
const totalPages=Math.ceil(filteredProducts.length/itemPerPage);
  if(currentpage < totalPages) {
        currentpage++;
        showPage(currentpage);
    }
})

// filter category change
document.getElementById("tech").addEventListener("change", (e) => {
    const selectedCategory = e.target.value;

    if(selectedCategory === "all") {
        renderProducts(allProducts);
    } else {
        const filtered = allProducts.filter(p => p.category === selectedCategory);
        renderProducts(filtered);
    }
               
    //    SEARCH BAR
const search = document.getElementById("Search1");
search.addEventListener("input", e => {
  const searchText = e.target.value.toLowerCase();
  filteredProducts = allProducts.filter(p =>
    p.title.toLowerCase().includes(searchText)
  );
  currentpage = 1;
  showPage(currentpage);
});
});

