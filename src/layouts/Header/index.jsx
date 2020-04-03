import React from 'react';
import { Row, Col, Input, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.content}>
        <Row className={styles.header}>
          <Col span={4}>
            <Row>
              <Col span={6}>
                <MenuOutlined className={styles.menuIcon} />
              </Col>
              <Col>
                <div>这是logo</div>
              </Col>
            </Row>
          </Col>
          <Col span={10} offset={5}>
            <Input.Search
              className={styles.search}
              placeholder="input search text"
              onSearch={value => console.log(value)}
            />
          </Col>
          <Col span={4} offset={1}>
            <Row justify="space-between">
              <Col span={10}>
                <Button className={styles.btn} type="primary">Login in</Button>
              </Col>
              <Col span={10}>
                <Button className={styles.btn}>Sign up</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
