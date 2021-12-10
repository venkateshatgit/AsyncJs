const posts =[
    {title: "Post One", body: "This is post one"},
    {title: "Post Second", body: "This is post two"}
];


function getPost(){

    let output='';
    setTimeout(()=>{
        posts.forEach(post =>{

            output += `<li>${post.title}: "${post.body}"</li>`

        })

        document.body.innerHTML = output;

    }, 1000)

    
}

function createPost(obj){

    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            posts.push(obj);
            
            const error = true;
            if(!error){
                resolve();
            }
            else{
                reject(`Some thing went`);
            }
        }, 3000);
    })

}

createPost({title: "Post Third", body: "This is third post"})
    .then(getPost)
    .catch(error);

