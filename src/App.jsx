import './App.css';
import { tasks } from './assets/tasks';

function App() {
    const completedArray = tasks.filter((task) => task.state === 'completed');
    const notCompletedArray = tasks.filter(
        (task) => task.state !== 'completed'
    );

    return (
        <>
            <h1>Task Manager</h1>
            <h2>Current Tasks ({notCompletedArray.length})</h2>
            <ul>
                {notCompletedArray.map((task) => (
                    <li key={task.id}>
                        <strong>{task.title}</strong>
                        <span>{task.state}</span>
                        <p>{task.priority}</p>
                        <p>{task.estimatedTime}</p>
                    </li>
                ))}
            </ul>
            <hr></hr>
            <h2>Completed Tasks ({completedArray.length})</h2>
            <ul>
                {completedArray.map((task) => (
                    <li key={task.id}>
                        <strong>{task.title}</strong>
                        <span>{task.state}</span>
                        <p>{task.priority}</p>
                        <p>{task.estimatedTime}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;
