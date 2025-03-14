const user=prompt("Enter the Name of Person!!")
const messages=[
    "Start Hacking.....",
    "Search the user.............",
    "User found !",
    `User name is${user}`,
    `Hacking  ${user} tiktok........`,
    `Hacking  ${user} gmail......`,
    `Hacking  ${user} instagram......`,
    `Hacking  ${user} snapchat......`,
    `Hacking  ${user} facebook......`,
    `Hacking  ${user} whatsapp......`,
    "Ip successfully Traced.............",
    "Hacking her phone........! ",
    "User Hacked..............",
    "Fetching all his data in your pc.........",
    "Fetched Successfully........!",
    "Data is being uploaded to our server........",
    "Data uploaded successfully........",
"                  Hacking Done!                  "
]
const sleep=(seconds)=>{
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(true)
        }, seconds *700)
    })
}

const showhack= async (message)=>{
 await sleep(5)
text.innerHTML= text.innerHTML+ message +"<br>"
}

(async()=>{
    for(let i=0;i<messages.length;i++)
    {
        await showhack(messages[i])
    }
})()