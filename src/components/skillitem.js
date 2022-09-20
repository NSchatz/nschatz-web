export default function SkillItem(props) {
    return (
    <div className="skillitem">
        <img class='skillimg' src={props.image} alt="" />
        <div className="skillname">{props.name}</div>
    </div>
    )
}