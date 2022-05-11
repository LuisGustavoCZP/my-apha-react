const { styled } = window;

const CardInfoStyled = styled.div({
    display: "flex",
    width: "100%",
    flexGrow: "1",
    justifyContent: "center",
    flexWrap: "wrap",
    textAlign: "center",
    whiteSpace: "wrap",
    margin: "5px 5px",
});

const CardInfoTitle = styled.h4({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin:" 0px .1em",
});

const CardInfoContent = styled.h4({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin:" 0px .1em",
    backgroundColor: "aliceblue",
    color: "#000",
});

function CardInfo (props)
{
    return React.createElement(CardInfoStyled, null,
        React.createElement(CardInfoTitle, null, props.title),
        React.createElement(CardInfoContent, null, props.info)
    );
}

export default CardInfo;