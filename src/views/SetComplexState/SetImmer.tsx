import React, { useCallback } from 'react';
import { useImmer } from 'use-immer';

import { Model } from './types';

const defaultState: Model[] = [
  { id: 1, name: 'model1', status: 'normal', tables: [
    { id: 1, name: 'table1', type: 'fact', dimensions: [
      { id: 1000, name: 'dimension1', alias: 'dimension1' },
      { id: 1001, name: 'dimension2', alias: 'dimension2' }
    ] }
  ]},
  { id: 2, name: 'model2', status: 'normal', tables: [
    { id: 2, name: 'table2', type: 'fact', dimensions: [
      { id: 1000, name: 'dimension3', alias: 'dimension3' },
      { id: 1001, name: 'dimension4', alias: 'dimension4' }
    ] }
  ]},
];

function SetImmer() {
  const [models, setModels] = useImmer<Model[]>(defaultState);

  const handleChangeDim1Alias = useCallback(() => {
    setModels((draft) => {
      draft[0].tables[0].dimensions[0].alias = `dimension1-${Date.now()}`;
    });
  }, [setModels]);

  return (
    <>
      <h1>Set State</h1>
      <div>
        <button onClick={handleChangeDim1Alias}>Change Dim1 Alias</button>
      </div>
      <div>
        {JSON.stringify(models)}
      </div>
    </>
  );
}

export default React.memo(SetImmer);
