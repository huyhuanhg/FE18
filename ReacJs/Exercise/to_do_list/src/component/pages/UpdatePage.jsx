import TaskForm from "./task_form/TaskForm";

function UpdatePage({computedMatch, ...args}) {
    return (
        <TaskForm {...args} data={computedMatch.params.key} type="update"/>
    );
}
export default UpdatePage;
