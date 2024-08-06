// Document Object Model:The Document Object Model (DOM) is a programming interface for web documents.
//  It represents the page so that programs can change the document structure, style, and content. 

// Pillars of DOM
    // 1.Selection of an Element.
    // 2.Changing HTML
    // 3.Changing CSS
    // 4.Event Listener

  // 1.Selection of an Element
     var a =  document.querySelector("h1")
     console.log(a)
 // 2.Changing HTML
    var b = document.querySelector("h1")
    b.innerHTML = "Changing Html"
 //  3.Changing CSS   
    document.querySelector("h1").style.color = "red"
//  4.Event Listener
    b.addEventListener("click",function(){
        b.style.color = "blue"
        b.innerHTML = "Event listenar"
    })

    