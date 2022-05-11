import React from 'react';

interface Props {
  id: string;
  children: Props[];
  style?: React.CSSProperties;
  onClick?: () => void;
}

function ComponentWithMemo(props: Props) {
  const { id, children, style, onClick } = props;

  return (
    <>
      <div style={style} onClick={onClick}>{id}</div>
      <div>
        {children.map(({ id: childId, children: childChildren }) => (
          <ComponentWithMemo
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

export default React.memo(ComponentWithMemo);
