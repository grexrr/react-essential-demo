export default function CoreConcept({title, img, description}) {
    return (
      <li>
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    )
  }