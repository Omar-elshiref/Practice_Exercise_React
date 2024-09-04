// import { FixedSizeList as List } from "react-window";

// // Create a large list of items
// const items = Array(1000)
//   .fill()
//   .map((_, index) => `Item ${index}`);

// const VirtualizedList = () => (
//   <List height={400} itemCount={items.length} itemSize={35} width={300}>
//     {({ index, style }) => (
//       // Render the item using the style provided by react-window
//       <div style={style}>{items[index]}</div>
//     )}
//   </List>
// );

// export default VirtualizedList;



import { VariableSizeList as List } from 'react-window';
 
// These row heights are arbitrary.
// Yours should be based on the content of the row.
const rowHeights = new Array(1000)
  .fill(true)
  .map(() => 25 + Math.round(Math.random() * 50));
 
const getItemSize = index => rowHeights[index];
 
const Row = ( index, style ) => (
    <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
      Row {index}
    </div>
  );
 
const VirtualizedList = () => (
  <List
    height={150}
    itemCount={1000}
    itemSize={getItemSize}
    width={300}
  >
    {Row}
  </List>
);

export default VirtualizedList;
