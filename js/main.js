// fetch("https://dummyjson.com/products")
//   .then(function (result) {
//     return result.json();
//   })
//   .then(function (ali) {
//     var mohamed = ali.products;
//     var basket = "";
//     for (var i = 0; i < mohamed.length; i++) {
//       var cartoona = `<div class="md:col-4 text-center mb-12" >
//                                     <img src="${mohamed[i].images[0]}" class="w-100" style='height:350px'>
//                                     <h4>Name:${mohamed[i].title}</h4>
//                                     <h6>Brand:${mohamed[i].brand}</h6>
//                                     <h6>Category:${mohamed[i].category}</h6>
//                                     <h6>Rating:${mohamed[i].rating}</h6>
//                                     <h6>Price:${mohamed[i].price}</h6>
//                                     <h6>ID:${mohamed[i].id}</h6>
//                                 </div>
//                                 `;
//       basket = basket + cartoona;
//     }

//     document.querySelector(".test").innerHTML = basket;
//   });

//=================================================================================
//=================================================================================
//=================================================================================
//=================================================================================
//=================================================================================

async function getApi() {
  var result = await fetch("https://dummyjson.com/products");
  var ali = await result.json();

  var mohamed = ali.products;
  var basket = "";
  for (var i = 0; i < mohamed.length; i++) {
    var cartoona = `<div class="md:col-4 text-center mb-12" >
                                    <img src="${mohamed[i].images[0]}" class="w-100" style='height:350px'>
                                    <h4>Name:${mohamed[i].title}</h4>
                                    <h6>Brand:${mohamed[i].brand}</h6>
                                    <h6>Category:${mohamed[i].category}</h6>
                                    <h6>Rating:${mohamed[i].rating}</h6>
                                    <h6>Price:${mohamed[i].price}</h6>
                                    <h6>ID:${mohamed[i].id}</h6>
                                </div>
                                `;
    basket = basket + cartoona;
  }

  document.querySelector(".test").innerHTML = basket;
}

getApi();

