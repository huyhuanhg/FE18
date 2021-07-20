const Sort = () => {
    return (
        <div className="dropdown my-3">
            <button className="btn btn-primary dropdown-toggle" type="button"
                    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Sắp xếp
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Hiển thị</a></li>
                <li><a className="dropdown-item" href="#">Ẩn</a></li>
                <li><a className="dropdown-item" href="#">Tăng dần</a></li>
                <li><a className="dropdown-item" href="#">Giảm dần</a></li>
            </ul>
        </div>
    );
}
export default Sort;