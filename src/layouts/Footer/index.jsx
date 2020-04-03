import React from 'react';
import { Row, Col } from 'antd';
import styles from './index.module.scss';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.content}>
        <Row className={styles.footer}>
          <Col span={12} className={styles.box}>
            <p>什么是OOM</p>
            <p>OOM = out of mana</p>
          </Col>
          <Col span={12} className={styles.box}>
            <p>感恩有你</p>
            <p>我的衣食父母</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
