
export default function useFormat() {

  // 标记 level
  const tagLevel = (data: any[], parentLevel: number): any[] => {
    return data.map((item, index) => {
      let children: any = null;
      if (item.children) {
        children = tagLevel(item.children, parentLevel + 1);
      }
      return { ...item, level: parentLevel, isParent: !!children, children };
    });
  }

  // 多层数据拍平
  const flatData = (data: any[]): any[] => {
    return data.reduce((memo, curr) => (
      curr.open
        ? memo.concat(curr, flatData(curr.children))
        : memo.concat(curr)
    ), []);
  }


  return {
    tagLevel,
    flatData
  }
}