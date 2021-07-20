import {Router, Switch} from "react-router-dom";

import history from './utils/history';

import 'antd/dist/antd.css';
import './App.css';

import Main from "./component/layouts/Main";

import HomePage from "./component/pages/HomePage";
import CreatePage from "./component/pages/CreatePage";
import UpdatePage from "./component/pages/UpdatePage";
import DeletePage from "./component/pages/DeletePage";

import {useEffect, useState} from "react";

function App() {
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        if (localStorage && localStorage.tasks) {
            let tasks = JSON.parse(localStorage.tasks)
            setTaskList(tasks);
        }
    }, []);


    const save = (tasks) => {
        localStorage.tasks = JSON.stringify(tasks);
    }

    const createKey = () => taskList.length + 1;

    const createTask = (newTask) => {
        let tasks = [
            ...taskList,
            newTask
        ];
        setTaskList(tasks)
        save(tasks);
    }

    const updateTask = (task) => {
        let newTask = taskList;
        newTask.splice(task.key - 1, 1, task);
        setTaskList(newTask);
        save(newTask);
    }

    const deleteTask = key => {
        let newTask = taskList;
        newTask.splice(key, 1);
        setTaskList(newTask);
        save(newTask);
    }
    return (
        <Router history={history}>
            <Switch>
                <Main exact path="/" component={HomePage} taskList={taskList} setTaskList={setTaskList}/>
                <Main exact path="/create" component={CreatePage} createTask={createTask} createKey={createKey}/>
                <Main exact path="/update/:key" component={UpdatePage} taskList={taskList} updateTask={updateTask}/>
                <Main exact path="/delete/:key" component={DeletePage} taskList={taskList} deleteTask={deleteTask}/>
            </Switch>
        </Router>
    );
}

export default App;
