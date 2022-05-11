export interface Dimension {
  id: number;
  name: string;
  alias: string;
}

export interface Table {
  id: number;
  name: string;
  type: string;
  dimensions: Dimension[];
}

export interface Model {
  id: number;
  name: string;
  status: string;
  tables: Table[];
}
