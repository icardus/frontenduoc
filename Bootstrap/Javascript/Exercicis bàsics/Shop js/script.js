//BUY

function buy (id) [
    productBuy=products.find {
        function (element) {
            if (element.id==id) {
                return element
            }
        }
    }

]



