import { ref } from "@vue/runtime-core";
import useFormat from "./useFormat";

export default function useToggle(data: any[]) {
  const { tagLevel, flatData } = useFormat();
  let dataWithTag = tagLevel(data, 0);
  let treeData = ref(flatData(dataWithTag));

  // toggle
  const toggle = (item: any) => {
    if (!item.children) return
    item.open = !item.open
    treeData.value = flatData(dataWithTag);
  }

  return {
    toggle,
    treeData
  }
}