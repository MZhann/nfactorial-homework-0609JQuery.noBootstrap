$(document).ready(function() {
    

    $('#MadLibs').on('click', function(e){
        // e.preventDefault
        $('.secondblock').empty();
        console.log('you clicked MadLibs');

        let mad = `
        <h1>Mad Libs</h1>
        <div class = "innerBlock">
           <form class = "innerInnerBlock">
               <h3>Person Name: <input id = "name" class = "box" type = "text" placeholder="enter"></h3>
               <h3>Character: <input id = "char" class = "box" type = "text" placeholder="enter"></h3>
               <h3>Adverb: <input id = "adv" class = "box" type = "text" placeholder="enter"></h3>
               <h3>Adjective: <input id = "adj" class = "box" type = "text" placeholder="enter"></h3>

               <button class = "button">Tell Story</button>
           </form>
           
          
        </div>   
        <div class = "resultText">
           <h2>Wendy's Crazy MadLibs Story</h2>

        </div>
        `;

    $('.secondblock').append(mad);

    $('button').on('click', function(e){
    e.preventDefault();
    console.log('yeah');
    let personName = $('#name').val();
    let character = $('#char').val();
    let adverb = $('#adv').val();
    let adjective = $('#adj').val();

    console.log(personName + " " + character + " " +adverb + " " +adjective);


    let h_2 = document.querySelector("h2");
    
    let h3 = document.createElement('h3');
    h3.className = "result";
    h3.innerHTML = `One day, my friend ${personName} was visiting New York and ran into ${character}. ${personName} ran ${adverb} to meet ${character}. But ${character} turned out to be very ${adjective} and ${personName} did not enjoy the meeting.`;
    h_2.append(h3);
    });


    })

    $('#TomThumb').on('click', function(){
        $('.secondblock').empty();
        console.log('you clicked TomThumb')

        let tom = `
        <h1>Tom Thumb</h1>
        <div class = "innerBlock">
           <form class = "innerInnerBlock">
               <h3>Image width (px): <input id = "name" class = "box" type = "text" placeholder="enter"></h3>
               <h3>Image height (px): <input id = "char" class = "box" type = "text" placeholder="enter"></h3>
               <h3>Number of Colors: <input id = "adv" class = "box" type = "text" placeholder="enter"></h3>
               

               <button class = "button">Calculate File Size</button>
           </form>
           
          
        </div>   
        <div class = "resultText"></div>
        `;
        console.log('let tom worked')


        $('.secondblock').append(tom);
        console.log('top appended')

        $('button').on('click', function(e){
            e.preventDefault();
            console.log('yeah');
            let width = $('#name').val();
            let height = $('#char').val();
            let num = $('#adv').val();
            
        
            console.log(width + " " + height + " " +num);
        
        
            let h_2 = document.querySelector(".resultText");
            
            let h3 = document.createElement('h3');
            h3.className = "result";
            h3.innerHTML = `File is ${(width * height*num)/ Math.pow(2, num)}KB which is OK!`;
            h_2.append(h3);
            });
        
    })





});


