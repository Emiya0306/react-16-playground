import React, { useCallback, useState } from 'react';

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

function SetState() {
  const [models, setModels] = useState<Model[]>(defaultState);

  const handleChangeDim1Alias = useCallback(() => {
    const curModel = models[0];
    const curTables = curModel.tables;
    const curDims = curTables[0].dimensions;

    setModels([
      { ...models[0], tables: [
        { ...curTables[0], dimensions: [
          { ...curDims[0], alias: `dimension1-${Date.now()}` },
          curDims[1],
        ] },
        curTables[1],
      ] },
      models[1],
    ]);
  }, [models]);

  const handleChangeDim2Alias = useCallback(() => {
    models[0].tables[0].dimensions[1].alias = `dimension2-${Date.now()}`;
    setModels(models);
    // setModels([...models]);
  }, [models]);

  return (
    <>
      <h1>Set State</h1>
      <div>
        <button onClick={handleChangeDim1Alias}>Change Dim1 Alias</button>
        <button onClick={handleChangeDim2Alias}>Change Dim2 Alias</button>
      </div>
      <div>
        {JSON.stringify(models)}
      </div>
    </>
  );
}

export default React.memo(SetState);
