import {db} from './firebase.js'
let blogId = decodeURI(location.pathname.split("/").pop());

let docRef = db.collection("blogs").doc(blogId);

docRef.get().then((doc) => {
    if(doc.exists){
        setupBlog(doc.data());
    } else{
        location.replace("/");
    }
})

const setupBlog = (data) => {
    const banner = document.querySelector('.banner');
    const blogTitle = document.querySelector('.title');
    const titleTag = document.querySelector('title');
    const publish = document.querySelector('.published');
       
    banner.style.backgroundImage = `url(${data.bannerImage})`;

    titleTag.innerHTML += blogTitle.innerHTML = data.title;
    publish.innerHTML += data.publishedAt;

     const article = document.querySelector('.article');
    
    addArticle(article, data.article);
    
}



const addArticle = (ele, data) => {
    data = data.split("\n").filter(item => item.length);
    var wrappedText = '';
    
    

    data.forEach(item => {
        // check for heading
        if(item[0] == '#'){
            let hCount = 0;
            let i = 0;
            while(item[i] == '#'){
                hCount++;
                i++;
            }
            let tag = `h${hCount}`;
            ele.innerHTML += `<${tag}>${item.slice(hCount, item.length)}</${tag}>`
        } 
        //checking for image format
        else if(item[0] == "!" && item[1] == "["){
            let seperator;

            for(let i = 0; i <= item.length; i++){
                if(item[i] == "]" && item[i + 1] == "(" && item[item.length - 1] == ")"){
                    seperator = i;
                }
            }

            let alt = item.slice(2, seperator);
            let src = item.slice(seperator + 2, item.length - 1);
            ele.innerHTML += `
            <img src="${src}" alt="${alt}" class="article-image">
            `;
        }

        else{
            // data.forEach(function(word, i){
            //     if(i > 0 && (i+1) % 10 == 0)
            //       wrappedText += word + '<br>';
            //     else
            //       wrappedText += word + ' ';
          
            //  ele.innerHTML += wrappedText;
            //   })
            ele.innerHTML += `<p>${item}</p>`;
        }
    })
}


//tweeting about the blog

const twitterBtn = document.getElementById('twitter-btn');

function tweetBlog()
{
    const twitterUrl = `https://twitter.com/intent/tweet?text= Hey,checkout my latest blog on https://localhost:3080`;

    window.open(twitterUrl, '__blank');
}


// event listeners


twitterBtn.addEventListener('click',tweetBlog);


