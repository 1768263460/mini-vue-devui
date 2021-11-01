import { defineComponent, SetupContext } from "@vue/runtime-core";
import useToggle from "./hooks/useToggle";
import { TreePropType } from "./tree-type";
import Indent from "./components/Indent";
import OperateTag from "./components/operateTag";
import './index.scss';

const Tree = defineComponent({
  name: 'd-tree',
  props: ['data'],
  setup(props: TreePropType, context: SetupContext) {

    const { toggle, treeData } = useToggle(props.data);

    // RenderNode
    const RenderNode = (node: any) => {
      let { isParent, children } = node;
      return (
        <div onClick={() => toggle(node)} class={`tree-item level-${node.level} ${node.open ? 'opened' : ''}`}>
          {
            isParent || children
              ? <OperateTag open={node.open} level={node.level} />
              : <Indent level={node.level} />
          }
          <span>{node.label}</span>
        </div>
      )
    }

    return () => {
      return (<div class="tree">
        {treeData.value.map(node => RenderNode(node))}
      </div>)
    }
  }
});

export default Tree;