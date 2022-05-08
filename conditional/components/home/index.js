import Card from "../card/index.js"
const { useState, useEffect } = React;

let search = "";
let charList = [];


function Home () 
{
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>
    {
        if(!search)
        {
            document.getElementById("input-episode").value = "1";
            loadcards("1")
        }
    });

    async function loadcards (ep) 
    {
        console.log(ep);
        //const ep = e.target.value;
        charList = [];
        setLoaded(false);
        search = ep;
        if(ep <= 0) 
        {
            search = "";
            return;
        }

        const resEp = await fetch(`https://rickandmortyapi.com/api/episode/${ep}`);
        const respEp = await resEp.json();
        const charURLs = respEp.characters;
        console.log(charURLs);
        const charIDs = [];
        for(let i = 0; i < charURLs.length; i++)
        {
            const characterURL = charURLs[i];
            //console.log(characterURL)
            const lasti = characterURL.slice(characterURL.lastIndexOf("/")+1);
            //console.log(lasti)
            const id = parseInt(lasti);
            if(id != NaN) charIDs.push(id);
        }

        const charsurl = `https://rickandmortyapi.com/api/character/${charIDs}`;
        console.log(charsurl);
        const resChars = await fetch(charsurl);
        const respChars = await resChars.json();
        
        const charLocs = {0:[]};
        for(let i = 0; i < respChars.length; i++)
        {
            const locationURL = respChars[i].origin.url;
            //console.log(locationURL)
            const lasti = locationURL.slice(locationURL.lastIndexOf("/")+1);
            if(lasti != "") {
                const id = parseInt(lasti);
                let charloc = charLocs[id];
                if(!charloc) 
                {
                    charloc = [];
                    charLocs[id] = charloc;
                };
                charloc.push(i);
            }
            else 
            {
                charLocs[0].push(i);
            };
        }

        console.log(charLocs);

        const locsURL = `https://rickandmortyapi.com/api/location/${Object.keys(charLocs)}`;
        console.log(locsURL);
        const locations = locsURL;
        const resOrigin = await fetch(locations);
        const respOrigin = await resOrigin.json();
        
        for(let i = 0; i < respOrigin.length; i++)
        {
            const origin = respOrigin[i];
            const locChars = charLocs[origin.id];
            for(let j = 0; j < locChars.length; j++)
            {
                const character = respChars[locChars[j]];
                if(origin.name == "unknown") character.origin = "Desconhecida";
                else character.origin = origin.name.replace("Earth", "Terra");

                charList.push(Card(character));
            }
        }
       
        console.log(charList);
        setLoaded(true);
    }
    
    const els = [];

    els.push(React.createElement("header", {id:"header", class:"Header"}, 
        React.createElement("h1", null, "Rick and Morty on React"),
        React.createElement("span", {id:"episode", class:"episode"},
            React.createElement("label", {class:"episode", for:"input-episode"}, "Episodio"),
            React.createElement("input", {id:"input-episode", type:"number", class:"episode", placeholder:"Insira aqui um numero de episódio"}),
            React.createElement("button", {id:"input-submit", type:"submit", class:"episode", onClick:(e) => loadcards(document.getElementById("input-episode").value)}, "Confirmar")
        )
    ));
    if(!loaded)
    {
        const texts = [];
        if(!search)
            texts.push(React.createElement("h2", {class:"empty"}, "Você pode precisa escolher um episodio!"));
        else 
        {
            texts.push(React.createElement("div", {class:"load"},
                React.createElement("div", {class:"ring"}, 
                    React.createElement("span")
                ),
                React.createElement("h2", null, 
                    React.createElement("span", null, "Carregando"), 
                    React.createElement("span", null, "...")
                )
            ));
        }

        els.push(React.createElement("div", {id:"home", class:"Home"}, texts));
    }
    else
    {
        els.push(React.createElement(
            "div", 
            {id:"home", class:"Home"}, 
            React.createElement("ul", {className:"cards"}, charList)
        ));
    }

    return els;
}

export default Home;