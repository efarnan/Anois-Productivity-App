import { useState } from 'react';
import { FaCircle } from 'react-icons/fa';

export default function Task(props) {
    const {addTask, deleteTask, moveTask, task} = props;

    const [urgencyLevel, setUrgencyLevel] = useState(task.urgency);
    const [collapsed, setCollapsed] = useState(task.isCollapsed);
    const [formAction, setFormAction] = useState("");

    function setUrgency(event) {
        setUrgencyLevel(event.target.attributes.urgency.value);
    }

    function handleSubmit(event) {
        ////
    }

    function handleMoveLeft() {

    }

    function handleMoveRight() {

    }

return (
    <div className={`task ${collapsed ? "collapsedTask" : ""}`}>
        <button onClick={handleMoveLeft} className="button moveTask">
            &#171;
        </button>
        <form onSubmit={handleSubmit} className={collapsed ? "collapsed" : ""}>
        <input 
        type="text" 
        className="title input"
        name="title"
        placeholder="Enter Task"
        disabled={collapsed}
        defaultValue={task.title}
        />
        <div className="urgencyLabels">
            <label className={'low ${urgencyLevel ==="low" ? "selected" : ""}'}/>
            <FaCircle/>
        </div>
        </form>
        <button onClick={handleMoveLeft} className="button moveTask">&#187</button>
    </div>
    );
}