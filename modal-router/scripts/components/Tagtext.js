function TagText (props) 
{
    return (
    <h1 className="tagtext">
        <span>{props.text}</span>
        <span>{props.subtext}</span>
    </h1>
    );
}