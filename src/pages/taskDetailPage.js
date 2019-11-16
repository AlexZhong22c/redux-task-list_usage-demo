import React from 'react';
import { Button } from 'antd';

export default function taskDetailPage({ match, history, location }) {
    console.log(match, history, location);
    return (
        <div>
            <div>
                <h3>{match.params.taskname}的详情</h3>
                <p>...</p>
            </div>
            <div>
              <Button onClick={history.goBack}>返回</Button>
            </div>
        </div>      
    );
  }