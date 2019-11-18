import * as React from 'react';

// TODO: 修改 LinkProps

export interface LinkProps {
  entityKey: string;
  contentState: any;
}

const Link: React.SFC<LinkProps> = ({ contentState, children, entityKey}) => {
  const { url } = contentState.getEntity(entityKey).getData();
  return (
    <a href={url} title={url}>
      {children}
    </a>
  );
};

export default Link;
