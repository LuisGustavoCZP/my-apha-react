function Card(character) 
{
    if(character.status == "Alive")
        return React.createElement("span", null, character.name);
    else if(character.status == "Dead")
        return React.createElement("span", null, character.name, React.createElement("span", {className:"status red"}, "MORTO"));
    else
        return React.createElement("span", null, character.name, React.createElement("span", {className:"status gray"}, "DESCONHECIDO"));
}

export default Card;