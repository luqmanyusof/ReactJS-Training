// Topic 21: Displaying Images
// Learn how to show images in React

function App() {
  return (
    <div>
      <h1>Topic 21: Displaying Images</h1>

      <h2>Example Image</h2>
      <img src="/user.png" alt="User" width="100" />
      <p>This is user.png from the public folder</p>

      <hr />

      <h2>How to Display Images</h2>
      <p>Step 1: Put your image in the public folder</p>
      <p>Example: public/user.png</p>
      
      <p>Step 2: Use the img tag with src starting with /</p>
      <p>Example: &lt;img src="/user.png" alt="User" /&gt;</p>

      <h2>Image Tag Attributes</h2>
      <p>✓ src="/user.png" - path to image (required)</p>
      <p>✓ alt="User" - text description (required)</p>
      <p>✓ width="200" - image width in pixels</p>
      <p>✓ height="150" - image height in pixels</p>

      <h2>Different Sizes</h2>
      <h3>Small (50px)</h3>
      <img src="/user.png" alt="User" width="50" />

      <h3>Medium (100px)</h3>
      <img src="/user.png" alt="User" width="100" />

      <h3>Large (200px)</h3>
      <img src="/user.png" alt="User" width="200" />

      <hr />

      <h2>Try This</h2>
      <p>1. Download any image from internet</p>
      <p>2. Save it in public folder as "user.png"</p>
      <p>3. Display it: &lt;img src="/user.png" alt="User" width="300" /&gt;</p>

    </div>
  )
}

export default App
