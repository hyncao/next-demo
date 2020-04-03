import Head from 'next/Head';
import { Row, Col } from 'antd';
import Header from '../Header';
import Footer from '../Footer';
import styles from './index.module.scss';

class BaseLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, keywords, description, children } = this.props;
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta name="keywords" content={keywords} />
          <meta name="description" content={description} />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=0"
          />
        </Head>
        <div className={styles.container}>
          <Header />
          <div span={24} className={styles.content}>
            {children}
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default BaseLayout;
