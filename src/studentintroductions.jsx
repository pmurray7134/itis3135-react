import { useEffect, useState } from "react";
import "./studentintros.css";

export default function StudentIntros() {
  const API_URL =
    "https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1";

  const [students, setStudents] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [showSingle, setShowSingle] = useState(false);
  const [singleIndex, setSingleIndex] = useState(0);

  const [modalStudent, setModalStudent] = useState(null);

  // Load students on mount
  useEffect(() => {
    async function load() {
      const res = await fetch(API_URL);
      const data = await res.json();

      let list = [];
      if (Array.isArray(data)) list = data;
      else list = Object.keys(data).map((k) => ({ id: k, ...data[k] }));

      setStudents(list);
      setFiltered(list);
    }

    load();
  }, []);

  // Update filter when search changes
  useEffect(() => {
    const q = search.toLowerCase();
    setFiltered(
      students.filter((s) =>
        JSON.stringify(s).toLowerCase().includes(q)
      )
    );
  }, [search, students]);

  const renderCard = (s, index) => {
    const initial = s.name ? s.name.charAt(0).toUpperCase() : "?";
    const email = s.email || s.id;

    return (
      <div key={index} className="card" onClick={() => setModalStudent(s)}>
        <div className="card-header">
          <div className="card-initial">{initial}</div>
          <div>
            <strong>{s.name || s.displayName || s.id}</strong>
            <div className="email-text">{email}</div>
          </div>
        </div>

        <div className="intro">
          {s.introduction || s.bio || "No intro available."}
        </div>
      </div>
    );
  };

  const closeModal = () => setModalStudent(null);

  return (
    <div className="students-page">
      <h1>Class Introductions</h1>

      {/* Top Bar */}
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search by name, email, etc..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={() => setShowSingle(!showSingle)}>
          {showSingle ? "Show Grid" : "Show One"}
        </button>
      </div>

      {/* Students Container */}
      <div id="studentsContainer" className="grid">
        {filtered.length === 0 ? (
          <p>No results found.</p>
        ) : showSingle ? (
          renderCard(filtered[singleIndex], singleIndex)
        ) : (
          filtered.map(renderCard)
        )}
      </div>

      {/* Modal */}
      {modalStudent && (
        <div className="modal-bg" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="close-btn" onClick={closeModal}>
              Close
            </div>

            <h2>{modalStudent.name || modalStudent.displayName || modalStudent.id}</h2>
            <p>{modalStudent.email || modalStudent.id}</p>
            <p>{modalStudent.introduction || modalStudent.bio}</p>

            <div id="modalLinks">
              {modalStudent.links &&
                Object.entries(modalStudent.links).map(([k, v]) => (
                  <a key={k} href={v} target="_blank" rel="noreferrer">
                    {k}
                  </a>
                ))}
            </div>

            <pre>{JSON.stringify(modalStudent, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  );
}
