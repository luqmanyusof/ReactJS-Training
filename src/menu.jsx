import { useState } from 'react'

// Import all topics
import Topic01 from './topics/01_project_setup.jsx'
import Topic02 from './topics/02_jsx_and_variables.jsx'
import Topic03 from './topics/03_first_component.jsx'
import Topic04 from './topics/04_props_basics.jsx'
import Topic05 from './topics/05_multiple_props.jsx'
import Topic06 from './topics/06_list_rendering.jsx'
import Topic07 from './topics/07_key_in_list.jsx'
import Topic08 from './topics/08_event_handling.jsx'
import Topic09 from './topics/09_usestate_basics.jsx'
import Topic10 from './topics/10_input_handling.jsx'
import Topic11 from './topics/11_multiple_inputs.jsx'
import Topic12 from './topics/12_conditional_rendering.jsx'
import Topic13 from './topics/13_form_submit.jsx'
import Topic14 from './topics/14_component_composition.jsx'
import Topic15 from './topics/15_basic_styling.jsx'
import Topic16 from './topics/16_useeffect_basics.jsx'
import Topic17 from './topics/17_fetch_api.jsx'
import Topic18 from './topics/18_loading_error_states.jsx'
import Topic19 from './topics/19_react_router_setup.jsx'
import Topic20 from './topics/20_navigation.jsx'
import Topic21 from './topics/21_login_ui.jsx'
import Topic22 from './topics/22_login_logic.jsx'
import Topic23 from './topics/23_protected_route.jsx'
import Topic24 from './topics/24_crud_list.jsx'
import Topic25 from './topics/25_crud_create.jsx'
import Topic26 from './topics/26_crud_update.jsx'
import Topic27 from './topics/27_crud_delete.jsx'
import Topic28 from './topics/28_refactor_structure.jsx'
import Topic29 from './topics/29_api_layer.jsx'
import Topic30 from './topics/30_final_integration.jsx'

// Topics list
const topics = [
  { id: 1, name: 'Project Setup', component: Topic01 },
  { id: 2, name: 'JSX and Variables', component: Topic02 },
  { id: 3, name: 'First Component', component: Topic03 },
  { id: 4, name: 'Props Basics', component: Topic04 },
  { id: 5, name: 'Multiple Props', component: Topic05 },
  { id: 6, name: 'List Rendering', component: Topic06 },
  { id: 7, name: 'Key in List', component: Topic07 },
  { id: 8, name: 'Event Handling', component: Topic08 },
  { id: 9, name: 'useState Basics', component: Topic09 },
  { id: 10, name: 'Input Handling', component: Topic10 },
  { id: 11, name: 'Multiple Inputs', component: Topic11 },
  { id: 12, name: 'Conditional Rendering', component: Topic12 },
  { id: 13, name: 'Form Submit', component: Topic13 },
  { id: 14, name: 'Component Composition', component: Topic14 },
  { id: 15, name: 'Basic Styling', component: Topic15 },
  { id: 16, name: 'useEffect Basics', component: Topic16 },
  { id: 17, name: 'Fetch API', component: Topic17 },
  { id: 18, name: 'Loading/Error States', component: Topic18 },
  { id: 19, name: 'React Router Setup', component: Topic19 },
  { id: 20, name: 'Navigation', component: Topic20 },
  { id: 21, name: 'Login UI', component: Topic21 },
  { id: 22, name: 'Login Logic', component: Topic22 },
  { id: 23, name: 'Protected Route', component: Topic23 },
  { id: 24, name: 'CRUD List', component: Topic24 },
  { id: 25, name: 'CRUD Create', component: Topic25 },
  { id: 26, name: 'CRUD Update', component: Topic26 },
  { id: 27, name: 'CRUD Delete', component: Topic27 },
  { id: 28, name: 'Refactor Structure', component: Topic28 },
  { id: 29, name: 'API Layer', component: Topic29 },
  { id: 30, name: 'Final Integration', component: Topic30 },
]

function App() {
  const [currentTopic, setCurrentTopic] = useState(null)

  // Show topic list
  if (!currentTopic) {
    return (
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <h1>React Course</h1>
        <p>Click a topic to view:</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          {topics.map(topic => (
            <a
              key={topic.id}
              href="#"
              onClick={(e) => { e.preventDefault(); setCurrentTopic(topic.id) }}
              style={{ padding: '8px 0', color: '#007bff' }}
            >
              {topic.id}. {topic.name}
            </a>
          ))}
        </div>
      </div>
    )
  }

  // Show selected topic
  const topic = topics.find(t => t.id === currentTopic)
  const TopicComponent = topic.component

  return (
    <div>
      <div style={{ padding: '10px 20px', backgroundColor: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentTopic(null) }} style={{ color: '#007bff' }}>
          ← Back to Topics
        </a>
        <span style={{ marginLeft: '20px', fontWeight: 'bold' }}>
          Topic {topic.id}: {topic.name}
        </span>
      </div>
      <TopicComponent />
    </div>
  )
}

export default App
