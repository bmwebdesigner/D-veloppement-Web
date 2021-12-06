//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// Fonction d'affichage des produits et comptage du nombre de produits      //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////

function ProdutList(tri) {
    
    var header = document.querySelector('header');
    var requestURL = '../data/products.json';
    var request = new XMLHttpRequest();
   
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        var products = request.response;
        //var superHeroes = JSON.parse(superHeroesText); // convert it to an object
        showProducts(products,tri);
       
        
    }
}
   

function showProducts(jsonObj,tri) {
    
   
    var product = productOrder(jsonObj,tri);

    var section = document.querySelector('#products-list');
    
        var productsCount = document.querySelector('#products-count');
    productsCount.textContent = product.length + ' produits';
   

        for (var i = 0; i < product.length; i++) {
            var myArticle = document.createElement('div');
            myArticle.classList.add("product");
            var myA = document.createElement('a');
            myA.href = "product.html?id=" + product[i].id;
            var myH2 = document.createElement('h2');
            var myImg = document.createElement('img');
            var myPara = document.createElement('p');
            myPara.classList.add("price");
            var mySmall = document.createElement("small")
            var myPara2 = document.createTextNode(product[i].price + " $");

        

            myImg.src = "assets/img/" + product[i].image;
            myH2.textContent = product[i].name;
            mySmall.textContent = 'Prix ';

            myArticle.appendChild(myA);
            myA.appendChild(myH2);
            myA.appendChild(myImg);

            myPara.appendChild(mySmall);
            myPara.appendChild(myPara2);


            myA.appendChild(myPara);

            
            section.appendChild(myArticle);
    }
   
    }


function clearProductsList() {
    
}


function productOrder(titi,tri) {

    
    var productsList = titi;
    var productsListTri;
    if (tri == 'priceUpLow' ) {
        productsListTri= productsList.sort(function (a, b) {
            var priceA = a.price,
                priceB = b.price;

            if (priceA < priceB) {
                return 1;
            } else if (priceA > priceB) {
                return -1
            } else {
                return 0
            }
        })
    }
    else if (tri == 'priceLowUp' || tri == null) {
        productsListTri= productsList.sort(function (a, b) {
            var priceA = a.price,
                priceB = b.price;

            if (priceA < priceB) {
                return -1;
            } else if (priceA > priceB) {
                return 1
            } else {
                return 0
            }
        })
    }
    else {
        productsListTri = productsList;

    }
    
    return productsListTri;
};