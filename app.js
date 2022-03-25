let thedata= [
    {
        age: 10,
        author: "7amada",
        created_on: 2022-2-02
    },
    {
        age: 22,
        author: "kaz e kag e",
        created_on: 2022-2-16,
        image: true,
        mentioned: "@fllan @fllan"        
    }
]
for(let i=0; i<thedata.length; i++)
{
    console.log("\n\nkeys inside document "+i);
    for (const key in thedata[i])
    {
        console.log(key);
    }
}

console.log(thedata);

