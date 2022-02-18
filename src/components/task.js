import "./App.css";
import { useState } from 'react;'

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

    </div>
    );
}