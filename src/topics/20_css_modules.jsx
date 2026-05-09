// Topic 20: CSS Modules
// Learn how to scope CSS to specific components

import styles from './20_css_modules.module.css'

// Component 1: Card
function Card() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Product Card</h3>
      <p className={styles.description}>This card uses CSS Modules</p>
      <button className={styles.button}>Buy Now</button>
    </div>
  )
}

// Component 2: Alert
function Alert() {
  return (
    <div className={styles.alert}>
      <h4>Important Notice</h4>
      <p>CSS Modules prevent style conflicts!</p>
    </div>
  )
}

// Component 3: Multiple classes
function UserProfile() {
  const isActive = true
  
  return (
    <div className={`${styles.profile} ${isActive ? styles.active : styles.inactive}`}>
      <h4>User Profile</h4>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  )
}

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Topic 20: CSS Modules</h1>

      <section className={styles.section}>
        <h2>Example Components</h2>
        <Card />
        <Alert />
        <UserProfile />
      </section>

      <hr />

      <section className={styles.section}>
        <h2>What are CSS Modules?</h2>
        <p>✓ CSS files where class names are scoped locally</p>
        <p>✓ Prevents global CSS conflicts</p>
        <p>✓ Automatic unique class names</p>
        <p>✓ Component-specific styling</p>
      </section>

      <section className={styles.section}>
        <h2>Benefits</h2>
        <div className={styles.benefitsList}>
          <p>✓ No naming conflicts</p>
          <p>✓ Modular and reusable</p>
          <p>✓ Easy to maintain</p>
          <p>✓ Co-located with components</p>
          <p>✓ Dead code elimination</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>How to Use</h2>
        <pre className={styles.code}>
{`// 1. Name file with .module.css
// Card.module.css

// 2. Import in component
import styles from './Card.module.css'

// 3. Use className
<div className={styles.card}>
  <h3 className={styles.title}>Title</h3>
</div>`}
        </pre>
      </section>

      <section className={styles.section}>
        <h2>Multiple Classes</h2>
        <pre className={styles.code}>
{`// Template literal
className={\`\${styles.card} \${styles.active}\`}

// Array join
className={[styles.card, styles.active].join(' ')}`}
        </pre>
      </section>

      <section className={styles.section}>
        <h2>CSS Modules vs Regular CSS</h2>
        <table border="1" cellPadding="10" className={styles.table}>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Regular CSS</th>
              <th>CSS Modules</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Scope</td>
              <td>Global</td>
              <td>Local</td>
            </tr>
            <tr>
              <td>Conflicts</td>
              <td>Possible</td>
              <td>Prevented</td>
            </tr>
            <tr>
              <td>Reusability</td>
              <td>Hard</td>
              <td>Easy</td>
            </tr>
            <tr>
              <td>Maintenance</td>
              <td>Difficult</td>
              <td>Easier</td>
            </tr>
          </tbody>
        </table>
      </section>

    </div>
  )
}

export default App
