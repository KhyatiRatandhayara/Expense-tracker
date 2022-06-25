import "./Card.css";

export const Card = (props: any) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};
/**
 * Note:
 * if we pass Card div without children property than all expense items are lost so must have to add props.children in div. children is reserved keyword that every component receive.children allow to show all children inside Card componenet wrap.
 *
 * Normal html understand class and take css from css files but our custom component not. we have to pass that pass with props property and than this will pass to div inside that.
 */
