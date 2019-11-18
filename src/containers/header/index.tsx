import * as React from 'react';
import Avatar from '../../components/avatar';
import Input from '../../components/input';

import './index.less';

const Header = () => {
  return (
    <div className="header">
      <div className="search">
        <Input className="search-input" placeholder="搜索..." icon="search" />
      </div>
      <div className="header-user">
        <Avatar src="https://profile-photo.s3.cn-north-1.amazonaws.com.cn/files/avatar/50705/MTAxNDExNzYzNzM1emY0Yzc0/avatar.png?v=93be45f191e645a99c67b205dcadb379" />
        <span className="header-username">Lemon</span>
      </div>
    </div>
  );
};

export default  Header;
