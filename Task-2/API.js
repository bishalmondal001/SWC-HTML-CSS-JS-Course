const API_KEY = 'api_key=9a6317e1e0a7012a63dd60de6c306b24';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desx&'+ API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';


//fetching movies from Tmdb website to here for displaying by property
const received_data = async () => {
    response = await fetch(API_URL);
    let data = await response.json();
    let films = data['results'];
    return films;

};



//creation of search bar
const input = document.createElement("input")
input.setAttribute("type","text");
input.setAttribute("id","i");
input.setAttribute("name","movie_name");


const form = document.createElement("form");
form.classList.add('w-36');
form.appendChild(input);

const element2 = document.getElementById("s");
const element3 = document.getElementById("s_1");
const element4 = document.getElementById("s_2");

element2.addEventListener('click',function(e){

    element2.removeChild(element4);
    element2.appendChild(form);
}
);

   
    //storing search item

    const text = element2.querySelector('input');


    const search_URL = BASE_URL +'/search/movie?'+API_KEY+'&query='+text;
    
    //fetching movies from Tmdb website to here for search property
    const search = async () => {
        c = await fetch(search_URL);
        let data_1 = await c.json();
        let films_1 = data_1['results'];
        return films_1;
    }
    





    //displaying 20 movies by popularity
    
    
    
    received_data()
    .then(films =>{
        let i =0;
        for (i=0;i<20;i++)
        {
        
                const img = document.createElement("img");
                img.src = IMG_URL+films[i].poster_path;
                console.log(films[i].poster_path);
                img.alt = "Poster Unavailable";
                img.classList.add('movie_poster');
                img.classList.add('object-cover');
                img.classList.add('innershadow');
                
            

                const T = document.createElement("span");
                T.classList.add('movie_name');
                const node = document.createTextNode(films[i].title);
                T.appendChild(node);

                
                tag = document.createElement("div");
                tag.classList.add('card');
                tag.appendChild(img);
                tag.appendChild(T);
                tag.id ="d";
                
                

                element = document.getElementById("body");
                element.appendChild(tag);

            
        }
             
    } );



element2.addEventListener('click',function(j)
{
    



    search()
    .then(films_1 => {

           
            console.log(text);

            const list =films_1;
            
            Array.from(list).forEach(child => 
            {
                const img = document.createElement("img");
                img.src = IMG_URL+child.poster_path;
                console.log(child.poster_path);
                img.alt = "Poster Unavailable";
                img.classList.add('movie_poster');
                img.classList.add('object-cover');
                img.classList.add('innershadow');
                
            

                const T = document.createElement("span");
                T.classList.add('movie_name');
                const node = document.createTextNode(child.title);
                T.appendChild(node);

                
                const tag = document.createElement("div");
                tag.classList.add('card');
                tag.appendChild(img);
                tag.appendChild(T);
                
                

                const element = document.getElementById("body");
                element.appendChild(tag);
        
            })
        });


            
    
        
 });

   
    





    
    
  
   

