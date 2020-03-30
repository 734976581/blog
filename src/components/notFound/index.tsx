/**
 * created by chenbiao on 2020/03/29
 */
import React from 'react';
import { Result, Button } from 'antd';
//配置
import { homePage } from '../../config/config';
//样式
import './index.less';

const NotFound = () => {
    return (
        <div id='page-2020'>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary" href={`/#${homePage}`}>Back Home</Button>}
            />
        </div>
    )
}

export default NotFound;