import React from 'react';

export function Middot(props): JSX.Element {
  const propsChildren = React.Children.toArray(props.children);
  const length = propsChildren.length;

  const children = [];
  for (let i = 0; i < length; i++) {
    const child = propsChildren[i];
    children.push(child);

    if (i < length - 1) {
      children.push(<span key={i}> &middot; </span>);
    }
  }

  return <>{children}</>;
};
