function Card(character) 
{
    const status = (character.status == "Alive"?"green":character.status == "Dead"?"red":"gray");

    const parts = [];
    parts.push(React.createElement("h3", {className:"char-name"}, character.name));
    const imgParts = [];
    imgParts.push(React.createElement("img", {src:character.image}));
    if(status == "gray")
        imgParts.push(React.createElement("div", {className:`status ${status}`}, React.createElement("h3", null, "DESCONHECIDO")));
    else if(status == "red")
        imgParts.push(React.createElement("div", {className:`status ${status}`}, React.createElement("h3", null, "MORTO")));

    parts.push(React.createElement("div", null, imgParts));
    
    const specie = character.species=="Human"?"Humano":character.species=="Humanoid"?"Humanoide":character.species=="Robot"?"Robô":character.species=="Mythological Creature"?"Criatura Mitológica":character.species=="Alien"?"Alienigena":character.species=="unknown"?"Desconhecido":character.species;
    const gender = character.gender=="Female"?"Fêmea":character.gender=="Male"?"Macho":character.gender=="unknown"?"Desconhecido":character.gender=="Genderless"?"Assexuado":character.gender=="Genderless"?"Assexuado":character.gender;

    parts.push(React.createElement("span", {className:"info specime"},
        React.createElement("h4", null, ``),
        React.createElement("h4", null, `${specie} ${gender}`)
    ));

    const origin = character.origin.includes("Replacement Dimension")?character.origin.replace("Replacement Dimension", "Substituta"):character.origin;

    parts.push(React.createElement("span", {className:"info origin"},
        React.createElement("h5", null, `Origem:`),
        React.createElement("h4", null, `${origin}`)
    ));

    return React.createElement("li", {className:`card ${status}`}, parts);
}

export default Card;