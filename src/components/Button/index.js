import "./style.scss";

const ButtonComponent = (props) => {
  const {
    buttonText,
    buttonMargin,
    buttonPadding,
    onClick,
    buttonWidth,
    buttonFont,
  } = props;
  const clickEvent = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <button
      style={{
        margin: buttonMargin,
        padding: buttonPadding,
        width: buttonWidth,
        fontSize: buttonFont,
      }}
      className="button-container"
      onClick={() => clickEvent()}
    >
      {buttonText}
    </button>
  );
};
export default ButtonComponent;
