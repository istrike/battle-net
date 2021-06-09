import React from 'react';
import styles from './index.less';

const Index = (props) => {
  return (
    <div>
      <h1 className={styles.title}>
        {console.log(props)}
        {props.children}
      </h1>
    </div>
  );
};

export default Index;
