import * as React from 'react';

export interface LinkProps {
  href: string;
  title: string;
}

const Link: React.SFC<LinkProps> = props => {
  const { url } = props.contentState.getEntity(props.entityKey).getData();
  return (
    <a href={url} title={url}>
      {props.children}
    </a>
  );
};

export default Link;
