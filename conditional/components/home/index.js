import Card from "../card/index.js"
const { useState, useEffect } = React;

let charList = [];

function Home () 
{
    const [loaded, setLoaded] = useState(false);
    //const [characters, setCharacters] = useState([]);

    async function loadcards (setLoaded) 
    {
        const resEp = await fetch("https://rickandmortyapi.com/api/episode/1");
        const respEp = await resEp.json();
        const charIDs = respEp.characters;
        //console.log(charIDs);
        charList = [];
        for(let i = 0; i < charIDs.length; i++)
        {
            const characterID = charIDs[i];
            const resChars = await fetch(characterID);
            const respChars = await resChars.json();
            const character = React.createElement("li", {key:i, className:"card"}, Card(respChars));
            charList.push(character);
        }
        setLoaded(true);
    }

    if(!loaded)
    {
        loadcards (setLoaded);
        return React.createElement("div", {id:"home", class:"Load"}, "Loading");
    }
    else
    {
        return React.createElement(
            "div", 
            {id:"home", class:"Home"}, 
            charList
        );
    }
}

export default Home;