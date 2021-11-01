// OperateTag
const OperateTag = (props: any) => <span class="open-tag" style={{ marginLeft: props.level * 30 - 15 + 'px' }}>{props.open ? '-' : '+'}</span>

export default OperateTag;