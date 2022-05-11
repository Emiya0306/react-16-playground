import React, { useCallback, useState } from 'react';

import SetState from './SetState';
import SetImmer from './SetImmer';

const TYPES = {
  NULL: 'null',
  SET_STATE: 'set_state',
  SET_IMMER: 'set_immer',
} as const;

type Types = ValueOf<typeof TYPES>;

function SetComplexState() {
  const [type, setType] = useState<Types>(TYPES.NULL);

  const handleSetState = useCallback(() => {
    setType(TYPES.SET_STATE);
  }, []);

  const handleSetImmer = useCallback(() => {
    setType(TYPES.SET_IMMER);
  }, []);

  return (
    <div>
      <h1>Context</h1>
      <div>
        <button onClick={handleSetState}>State</button>
        <button onClick={handleSetImmer}>Immer</button>
      </div>
      <div>
        {type === TYPES.NULL && <>Null</>}
        {type === TYPES.SET_STATE && <SetState />}
        {type === TYPES.SET_IMMER && <SetImmer />}
      </div>
    </div>
  );
}

export default React.memo(SetComplexState);
