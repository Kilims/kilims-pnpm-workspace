import React, { useState } from 'react';
import { Button } from 'antd-mobile';
import styled from 'styled-components';
import './index.less';

const Wrapper = styled.div`
  .am-button {
    background-color: blueviolet;
  }
`;

interface Props {
  /**
   * 按钮类型 默认primary
   */
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
  /**
   * 点击事件  有交互的时候用这个
   */
  onClick?: Function;
}

/**
 * Button 组件
 * @link [antd button](https://ant.design/components/button-cn/)
 */

function BaseMobileButton(props: Props) {
  const [loading, setLoading] = useState(false);
  const { onClick, type } = props;
  const handleClick = async () => {
    if (!onClick) return;
    if (loading) return;
    setLoading(true);
    try {
      await onClick();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <Button type="primary">按钮</Button>
    </Wrapper>
  );
}

BaseMobileButton.defaultProps = {
  type: 'primary',
};

export default BaseMobileButton;
