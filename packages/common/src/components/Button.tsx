'use Client';

import { ReactElement, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { inc } from '../store/Calculator';

interface Exam {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const Button = (): ReactElement => {
  const numberObj = useSelector((state: RootState) => state.calc);
  const dispatch = useDispatch();

  const [data, setData] = useState<Exam>({
    userId: 0,
    id: 0,
    title: '',
    completed: false
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <div>
        <div>{data.userId}</div>
        <div>{data.id}</div>
        <div>{data.title}</div>
        <div>{String(data.completed).toString()}</div>
        <div>{numberObj.num}</div>
        <button onClick={() => dispatch(inc())}>Click</button>
      </div>
    </>
  );
};
