export const postUser= async (data)=>{
     const res = await fetch('https://assignment11-server-side-hazel.vercel.app/user', {
        "method": "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)

     })
     const result = await res.json();
     
} 