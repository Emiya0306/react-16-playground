import React from 'react';

interface Props {
  id: string;
  children: Props[];
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function ComponentWithoutMemo(props: Props) {
  const { id, children, style, onClick } = props;
  return (
    <>
      <div style={style} onClick={onClick}>{id}</div>
      <div>
        {children.map(({ id: childId, children: childChildren }) => (
          <ComponentWithoutMemo
            key={childId}
            id={childId}
            children={childChildren}
            style={style}
            onClick={onClick}
          />
        ))}
      </div>
    </>
  );
}
