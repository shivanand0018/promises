function updateLastUserActivityTime()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.lastActivity=new Date().getTime();
            resolve(user.lastActivity); 

        },1000)
    })
}

function createPost(data)
{
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            user.push(data);
            resolve();
        }, 3000)
    }) 
}

let user=[{
    'name':'Shivanand',
    'lastActivity':'13th of Feb'
}]

Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()]).then(()=>{
    console.log(updateLastUserActivityTime);
    console.log(user)
})