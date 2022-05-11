import Status from "./Status.js"
import CardInfo from "./CardInfo.js"

const { styled } = window;

const species = {
    "Human":"Humano",
    "Humanoid":"Humanoide",
    "Robot":"Robô",
    "Mythological Creature":"Criatura Mitológica",
    "Alien":"Alienigena",
    "unknown":"Coisa",
    "Disease":"Doença"
};

const genders = {
    "Female":"Fêmea",
    "Male":"Macho",
    "unknown":"",
    "Genderless":"Assexuado"
}

const CardColors = {
    Alive:styled.li({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "225px",
        height: "350px",
        color: "hsl(8, 10%, 0%)",
        margin: "1px",
        padding: "5px",
        backgroundColor: "var(--mainColor)"
    }),
    Dead:styled.li({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "225px",
        height: "350px",
        color: "hsl(8, 10%, 0%)",
        margin: "1px",
        padding: "5px",
        backgroundColor: "var(--mainColor3)"
    }),
    unknown:styled.li({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "225px",
        height: "350px",
        color: "hsl(8, 10%, 0%)",
        margin: "1px",
        padding: "5px",
        backgroundColor: "var(--mainColor2)"
    })
}

const CharName = styled.h3({
    display: "flex",
    flexGrow: "1",
    fontWeight: "bold",
    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    verticalAlign: "middle",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: "2px"
});

const CardImageContainer = styled.div({
    width: "175px",
    height: "175px",
    position: "relative"
});

const CardImage = styled.img({
    width: "100%",
    height: "100%"
});

function Card(props) 
{   
    const character = props.character;
    const parts = [];

    parts.push(React.createElement(CharName, null, character.name));
    
    parts.push(React.createElement(CardImageContainer, null, 
        React.createElement(CardImage, {src:character.image}),
        React.createElement(Status, {status:character.status})
    ));
    
    let specie = species[character.species];
    if(!specie) specie = character.species;

    let gender = genders[character.gender];
    if(gender != "" && !gender) gender = character.gender;

    parts.push(React.createElement(CardInfo, { title:'', info:`${specie} ${gender}`}));
    
    const origin = character.origin.includes("Replacement Dimension")?character.origin.replace("Replacement Dimension", "Substituta"):character.origin;

    parts.push(React.createElement(CardInfo, { title:'Origem:', info:`${origin}`}));

    return React.createElement(CardColors[character.status], {className:"card"}, parts);
}

export default Card;