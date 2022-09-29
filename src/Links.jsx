import "./styles/Links.css"

const Links = props => {
  return (<div id="links-container">
    {props.data.map(link => (
      <a href={link.url} key={link.url} target="_blank">
        {link.imageType == "img" ? 
        <img src={link.imageSrc} height={30} /> :
        <object type="image/svg+xml" data={link.imageSrc}></object>
        }
        <br />
        {link.name}
      </a>
    ))}
  </div>)
}

export default Links