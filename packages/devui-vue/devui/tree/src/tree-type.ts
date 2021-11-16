type TreeDataItem = {
  label: string,
  open?: boolean,
  key?: string | number,
  children?: TreeData,
}

type TreeData = Array<TreeDataItem>;

type TreePropType = {
  data: TreeData
}

export {
  TreeData,
  TreeDataItem,
  TreePropType
}