import React from 'react';
import { Row, Col, Divider } from 'antd';

const Card = () => (
    <>
     <Divider orientation="center">Section</Divider>
     <Row gutter={16}>
      <Col span={8}>
          
        <Card title="Card title" bordered={false}
         cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
      </>
      );
      
export default Card;