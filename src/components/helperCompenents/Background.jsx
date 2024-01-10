/* eslint-disable react/prop-types */
const Background = (props) => (
    <div className={props.color}>
        {props.children}
    </div>
);

export default Background;