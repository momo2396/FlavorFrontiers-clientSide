export const getUser = async(email)=>{
    const res = await fetch(`https://assignment11-server-side-hazel.vercel.app/user?email=${email}`)
const data = await res.json();
console.log(data)
return data
}