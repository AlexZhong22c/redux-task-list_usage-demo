import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';

class TodoList extends Component {
    render() { 
        return ( 
            <div>
                <div>
                    <Input placeholder='请输入...' style={{ width:'250px' }} />
                </div>
            </div>
         );
    }
}
export default TodoList;