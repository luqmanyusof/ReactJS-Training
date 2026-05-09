// Topic 4: React Fragments
// Learn how to group elements without adding extra DOM nodes

import { Fragment } from 'react'

// Component with extra div (not ideal)
function CardWithDiv() {
  return (
    <div>
      <h3>Product 1</h3>
      <p>Price: $99</p>
    </div>
  )
}

// Component with Fragment (better)
function CardWithFragment() {
  return (
    <>
      <h3>Product 2</h3>
      <p>Price: $149</p>
    </>
  )
}

// List component using Fragment with key
function ListItems() {
  const items = [
    { id: 1, name: 'Apple', price: 1.5 },
    { id: 2, name: 'Banana', price: 0.8 },
    { id: 3, name: 'Orange', price: 2.0 }
  ]

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <Fragment key={item.id}>
            <tr>
              <td>{item.name}</td>
              <td>${item.price}</td>
            </tr>
          </Fragment>
        ))}
      </tbody>
    </table>
  )
}

function App() {
  return (
    <div>
      <h1>Topic 4: React Fragments</h1>

      <h2>Problem: Extra Div Wrapper</h2>
      <div style={{ border: '2px solid red', padding: '10px' }}>
        <CardWithDiv />
        <p>Notice the extra div around h3 and p (inspect in DevTools)</p>
      </div>

      <hr />

      <h2>Solution: Fragment (No Extra Div)</h2>
      <div style={{ border: '2px solid green', padding: '10px' }}>
        <CardWithFragment />
        <p>No extra div wrapper! Cleaner DOM structure.</p>
      </div>

      <hr />

      <h2>Fragment Syntax Options</h2>
      <h3>1. Short Syntax (Recommended)</h3>
      <pre>{`<>
  <h1>Title</h1>
  <p>Content</p>
</>`}</pre>

      <h3>2. Full Syntax (When you need key prop)</h3>
      <pre>{`import { Fragment } from 'react'

<Fragment key={id}>
  <h1>Title</h1>
  <p>Content</p>
</Fragment>`}</pre>

      <hr />

      <h2>Fragment with Keys (in Lists)</h2>
      <ListItems />

      <hr />

      <h2>When to Use Fragments?</h2>
      <p>✓ Return multiple elements from component</p>
      <p>✓ Avoid unnecessary div wrappers</p>
      <p>✓ Keep DOM clean and semantic</p>
      <p>✓ Better CSS styling (no extra containers)</p>
      <p>✓ Mapping lists with multiple elements per item</p>

    </div>
  )
}

export default App
