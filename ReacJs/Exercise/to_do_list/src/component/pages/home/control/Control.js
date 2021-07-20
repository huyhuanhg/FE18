import Search from "./search/Search";
import Sort from "./sort/Sort";

import {Row, Col} from 'antd';

const Control = () => {
    return (
        <>
            <Row>
                <Col span={24}>
                    <Search/>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Sort/>
                </Col>
            </Row>
        </>
)
    ;
}
export default Control;