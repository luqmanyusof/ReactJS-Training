function MemberTable({ members, onEdit }) {
  return (
    <div>
      <h3>Members</h3>
      <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Telefon</th>
            <th>Email</th>
            <th>Jawatan</th>
            <th>No IC</th>
            <th>No Keahlian</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {members.map(m => (
            <tr key={m.id}>
              <td>{m.nama}</td>
              <td>{m.telefon}</td>
              <td>{m.email}</td>
              <td>{m.jawatan}</td>
              <td>{m.nombor_ic}</td>
              <td>{m.no_keahlian}</td>
              <td>
                <button onClick={() => onEdit(m)} style={{ padding: 3 }}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MemberTable
