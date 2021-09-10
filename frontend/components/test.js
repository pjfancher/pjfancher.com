export default function Test(props) {
  return (
    <div className="test">
      Test Component: {props.name}
      {props.children}
    </div> 
  )
}
