import classes from "./Card.module.css";

function Card(props) {
  return (
    <div className={classes.card}>
      {/* receiving the props that are between the opening and closing card component using children */}
      {props.children}
    </div>
  );
}

export default Card;
