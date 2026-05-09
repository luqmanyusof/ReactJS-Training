function MemberForm({ form, setForm, onSubmit, onCancel, isEdit }) {
  return (
    <div>
      <h3>{isEdit ? 'Edit' : 'Add'} Member</h3>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Nama"
          value={form.nama || ''}
          onChange={(e) => setForm({ ...form, nama: e.target.value })}
          style={{ display: 'block', margin: 5, padding: 5, width: 300 }}
        />
        <input
          placeholder="Telefon"
          value={form.telefon || ''}
          onChange={(e) => setForm({ ...form, telefon: e.target.value })}
          style={{ display: 'block', margin: 5, padding: 5, width: 300 }}
        />
        <input
          placeholder="Email"
          value={form.email || ''}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={{ display: 'block', margin: 5, padding: 5, width: 300 }}
        />
        <input
          placeholder="Jawatan"
          value={form.jawatan || ''}
          onChange={(e) => setForm({ ...form, jawatan: e.target.value })}
          style={{ display: 'block', margin: 5, padding: 5, width: 300 }}
        />
        <input
          placeholder="Nombor IC"
          value={form.nombor_ic || ''}
          onChange={(e) => setForm({ ...form, nombor_ic: e.target.value })}
          style={{ display: 'block', margin: 5, padding: 5, width: 300 }}
        />
        <input
          placeholder="No Keahlian"
          value={form.no_keahlian || ''}
          onChange={(e) => setForm({ ...form, no_keahlian: e.target.value })}
          style={{ display: 'block', margin: 5, padding: 5, width: 300 }}
        />
        <button type="submit" style={{ margin: 5, padding: 5 }}>
          {isEdit ? 'Update' : 'Add'}
        </button>
        {isEdit && (
          <button type="button" onClick={onCancel} style={{ margin: 5, padding: 5 }}>
            Cancel
          </button>
        )}
      </form>
    </div>
  )
}

export default MemberForm
