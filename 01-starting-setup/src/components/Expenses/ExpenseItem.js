import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHnadler = () => {
    setTitle('Updated!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHnadler}>Change Title</button> {/* clickHandler() 일 경우 버튼이 클릭될 때 실행되는 것이 아니라 JSX가 분석될 때 실행된다.*/}
    </Card>
  );
};

export default ExpenseItem;
