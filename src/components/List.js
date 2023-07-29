// isCompleted

export const List = (props) => {
    return (
    <div className="task" style={{backgroundColor: props.isCompleted && "green" }}>
        <h3>{props.name}</h3>
        <button onClick={(() => props.completedTask(props.id))}>completed</button>
        <button  onClick={(()=>props.deleteTask(props.id))}> x </button>
    </div>)
}