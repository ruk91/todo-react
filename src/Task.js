export const Task = (props) => {
    return (
        <div className='task'>
            <h2>{props.taskName}</h2>
            <button className='close-button' onClick={() => props.deleteTask(props.id)}>X</button>
        </div>

    )
}