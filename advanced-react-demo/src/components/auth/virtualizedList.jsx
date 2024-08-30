import { FixedSizeList as List } from "react-window";

// Create a large list of items
const items = Array(1000)
  .fill()
  .map((_, index) => `Item ${index}`);

const VirtualizedList = () => (
  <List height={400} itemCount={items.length} itemSize={35} width={300}>
    {({ index, style }) => (
      // Render the item using the style provided by react-window
      <div style={style}>{items[index]}</div>
    )}
  </List>
);

export default VirtualizedList;
