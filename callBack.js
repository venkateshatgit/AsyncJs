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

function createPost(obj, callback){

    setTimeout(()=>{
        posts.push(obj)
        callback();
    }, 3000);
}

createPost({title: "Post Third", body: "This is third post"}, getPost);
createPost({title: "Post Fouth", body: "This is fourth post"}, getPost);
