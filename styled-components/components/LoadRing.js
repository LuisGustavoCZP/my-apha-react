const { styled } = window;
const { keyframes } = styled;

const ringCircleSpin = keyframes({
    "0%": { transform:"rotate(0deg)" },
    "100%": { transform:"rotate(360deg)" }
});

const ringPointerSpin = keyframes({
    "0%": { transform:"rotate(45deg)" },
    "100%": { transform:"rotate(405deg)" }
});

const textSpin = keyframes({
    "0%": { transform:"rotate3d(1, 0, .1, 360deg)" },
    "50%": { transform:"rotate3d(1, 0, .1, 0deg)" },
    "100%": { transform:"rotate3d(1, 0, .1, 0deg)" }
});

function createAnim (keyframe, speed=2, mode="linear", count="infinite", alternate=false) 
{
    const newanimation = [keyframe, ` ${speed}s ${mode} ${count} ${alternate?"alternate":""}`];
    newanimation.isCss = true;
    return newanimation;
}

const LoadDiv = styled.div({
    display: "flex",
    flexGrow: "1",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    userSelect: "none",
    pointerEvents: "none",
});

const LoadText = styled.h2({
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: "var(--subColor2)",
    textShadow: "0 0 10px var(--subColor)",
    fontFamily:"sans-serif",
    fontSize:"30px",
    letterSpacing:"4px",
    textTransform:"uppercase",
    zIndex: "10",
});

const LoadSubText = styled.span({
    display: "flex",
    justifyContent: "center",
    animation:createAnim(textSpin, 5, "ease-in-out"),
    overflow: "hidden",
});

const ringStyles = {
    position:"absolute",
    background:"transparent",
    left:"50%",
}

const RingCircle = styled.span({
    ...ringStyles,
    top:"50%",
    transform:"translate(-50%,-50%)",
    width:"150px",
    height:"150px",
    border:"3px solid hsla(208, 10%, 40%, 70%)",
    borderRadius:"50%",
    textTransform:"uppercase",
    boxShadow:"0 0 20px hsla(208, 10%, 30%, 80%)",
    ":before": {
        content:"''",
        position:"absolute",
        top:"-3px",
        left:"-3px",
        boxSizing: "content-box",
        width:"100%",
        height:"100%",
        border:"3px solid transparent",
        borderTop:"3px solid var(--subColor)",
        borderRight:"3px solid var(--subColor)",
        borderRadius:"50%",
        animation:createAnim(ringCircleSpin)
    },
});

const RingPoint = styled.div({
    ...ringStyles,
    width:"50%",
    display:"block",
    top:"calc(50% - 2px)",
    height:"4px",
    transformOrigin:"left",
    animation:createAnim(ringPointerSpin),
    ":before": {
        content:"''",
        position:"absolute",
        width:"16px",
        height:"16px",
        borderRadius:"50%",
        background: "var(--subColor)",
        top:"-6px",
        right:"-8px",
        boxShadow:"0 0 20px var(--subColor)"
    }
});

function LoadRing (props)
{
    return React.createElement(LoadDiv, null,
        React.createElement(RingCircle, null, 
            React.createElement(RingPoint)
        ),
        React.createElement(LoadText, null, 
            React.createElement(LoadSubText, null, "Carregando"), 
            React.createElement("span", null, "...")
        )
    )
}

export default LoadRing;