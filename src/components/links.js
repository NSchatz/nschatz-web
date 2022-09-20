function Link(props) {
  return (
    <a href={ props.link } class="link-buttons">
      { props.name }
    </a>
  )
}

export default Link