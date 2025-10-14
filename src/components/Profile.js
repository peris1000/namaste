import { useState, useEffect } from 'react';

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    console.log('Profile use effect1');
    const timer = setInterval(() => {
      console.log('interval call');
    }, 1000);

    // this function is called only when the component is getting unmounted
    return () => {
      clearInterval(timer);
      console.log('useEffect return');
    };
  }, [count]);

  useEffect(() => {
    console.log('Profile use effect2');
  }, [count2]);

  console.log('Profile Render');

  return (
    <div className="user-card">
      <h2>Profile Component</h2>
      <h3>Name: {props.name}</h3>

      <div>
        Count: {count} Count2: {count2}
        <button
          onClick={() => {
            setCount(count + 1);
            setCount2(count2 + 1);
          }}
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default User;
