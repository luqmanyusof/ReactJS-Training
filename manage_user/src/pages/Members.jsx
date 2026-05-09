import { useState, useEffect } from 'react'
import MemberForm from '../components/MemberForm'
import MemberTable from '../components/MemberTable'

const API = 'https://training-backend-sigma.vercel.app'

function Members({ auth, onLogout }) {
  const [members, setMembers] = useState([])
  const [form, setForm] = useState({})
  const [edit, setEdit] = useState(null)

  useEffect(() => {
    loadMembers()
  }, [])

  const loadMembers = async () => {
    const res = await fetch(`${API}/api/ahli`)
    const data = await res.json()
    setMembers(data)
  }

  const addMember = async (e) => {
    e.preventDefault()
    await fetch(`${API}/api/ahli`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    setForm({})
    loadMembers()
  }

  const updateMember = async (e) => {
    e.preventDefault()
    await fetch(`${API}/api/ahli/${edit}?username=${auth.username}&password=${auth.password}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    setEdit(null)
    setForm({})
    loadMembers()
  }

  const handleEdit = (member) => {
    setEdit(member.id)
    setForm(member)
  }

  const handleCancel = () => {
    setEdit(null)
    setForm({})
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Member Management</h2>
      <button onClick={onLogout} style={{ marginBottom: 10, padding: 5 }}>
        Logout
      </button>

      <MemberForm
        form={form}
        setForm={setForm}
        onSubmit={edit ? updateMember : addMember}
        onCancel={handleCancel}
        isEdit={!!edit}
      />

      <MemberTable members={members} onEdit={handleEdit} />
    </div>
  )
}

export default Members
