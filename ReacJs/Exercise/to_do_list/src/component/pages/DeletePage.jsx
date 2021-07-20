import '../../css/alert.css';
import '../../css/task-list-btn.css';

import {Button, Space} from "antd";

import history from "../../utils/history";
function DeletePage({taskList, computedMatch, deleteTask}) {

    let key = computedMatch.params.key - 1;
    return (
        <div className="alert-delete">
            <h2>Bạn chắc chắn muốn xóa:</h2>
            <hr/>
            <div className="alert-content">
                <p><span>Tên công việc:</span> {taskList[key].taskName}</p>
                <p><span>Ngày bắt đầu:</span> {taskList[key].startDate}</p>
                <p><span>Tình trạng:</span> {taskList[key].status ? "Đã hoàn thành" : "Đang thực hiện"}</p>
            </div>
            <div className="alert-control">
                <Space>
                    <Button type="primary delete btn-custom" onClick={()=>{
                        deleteTask(key);
                        return history.push('/');
                    }}>
                        Xóa
                    </Button>
                    <Button type="primary btn-custom" onClick={()=>{
                        history.push('/');
                    }}>
                        Hủy
                    </Button>
                </Space>
            </div>
        </div>

    );
}

export default DeletePage;