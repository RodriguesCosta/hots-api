import { Typography, Row, Col } from 'antd';

const { Title, Paragraph, Text } = Typography;

export const Home = (): JSX.Element => {
  return (
    <Row>
      <Col span={4}></Col>
      <Col span={16}>
        <Title>HOTS API</Title>
        <Paragraph>
          HOTS API is a website with open source code that gathers information
          from various places in a single API to be consumed by other websites
          or mobile applications.
        </Paragraph>

        <Text code>/api/heroes</Text>
        <br />
        <Text code>/api/heroes-simple-list</Text>
        <br />
        <Text code>/api/heroes/mei</Text>
        <br />
        <Text code>/api/hero-build/mei</Text>
      </Col>
      <Col span={4}></Col>
    </Row>
  );
};

export default Home;
