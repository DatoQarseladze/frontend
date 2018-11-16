let travellers = [
    "<div class='popular-traveller'><div class='traveller-picture bidzina'></div><div class='traveller-name'>Bidzina Ivanishvili</div><div class='traveller-place'>Lives in Georgia</div><div class='traveller-info'><i class='fas fa-long-arrow-alt-right'></i></div></div>",
    "<div class='popular-traveller'><div class='traveller-picture mikho'></div><div class='traveller-name'>Mikheil Saakashvili</div><div class='traveller-place'>Lives in Georgia</div><div class='traveller-info'><i class='fas fa-long-arrow-alt-right'></i></div></div>",
    "<div class='popular-traveller'><div class='traveller-picture targamadze'></div><div class='traveller-name'>Otiko Potskhoraia</div><div class='traveller-place'>Lives in Georgia</div><div class='traveller-info'><i class='fas fa-long-arrow-alt-right'></i></div></div>",
    "<div class='popular-traveller'><div class='traveller-picture givi'></div><div class='traveller-name'>Givia Daundobeli</div><div class='traveller-place'>Lives in Georgia</div><div class='traveller-info'><i class='fas fa-long-arrow-alt-right'></i></div></div>",
];

class SlideShow {
    constructor(componentArray, whereInserted, quantity) {
        this.componentArray = componentArray;
        this.whereInserted = whereInserted;
        this.quantity = quantity;
    }

    printSlide(){
        for(let i=0; i<this.quantity; i++) {
            document.getElementById(this.whereInserted).innerHTML += this.componentArray[i];
                
        }
    }

    left(){
        document.getElementById(this.whereInserted).innerHTML = '';
        let firstElement = this.componentArray.shift();
        this.componentArray.push(firstElement);
        this.printSlide();
    }
}



let travellerSlide = new SlideShow(travellers, 'popular-travellers-right', 3);
travellerSlide.printSlide();
document.getElementById('popular-travellers-button').addEventListener('click', function() {
    travellerSlide.left()
})
