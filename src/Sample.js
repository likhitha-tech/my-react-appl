function Sample(props)
{
return(
<div style={{backgroundColor:props.abc}}>
<h2>Welcome{props.person} to class</h2>
<p>Hello my city is {props.place}</p>
</div>
);


}

export default Sample;