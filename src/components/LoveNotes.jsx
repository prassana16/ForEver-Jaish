import React, { useState, useEffect } from 'react';

const LoveNotes = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");

  // Retrieve notes from localStorage on component mount
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('loveNotes')) || [];
    setNotes(savedNotes);
  }, []);

  // Add a new note and save to localStorage
  const addNote = () => {
    if (note.trim() !== "") {
      const newNotes = [...notes, { text: note, id: Date.now() }];
      setNotes(newNotes);
      localStorage.setItem('loveNotes', JSON.stringify(newNotes)); // Save to localStorage
      setNote("");
    }
  };

  // Delete a note and update localStorage
  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem('loveNotes', JSON.stringify(updatedNotes)); // Update localStorage
  };

  return (
    <div className="love-notes-section bg-[#cff8ff] p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-serif font-bold text-[#743c1f] mb-4">Love Notes</h2>

      {/* Note Input */}
      <div className="flex flex-col items-center mb-6">
        <textarea
          className="w-full md:w-3/4 p-3 border font-mono border-[#74452c] rounded-lg focus:outline-none focus:border-[#5f3118] resize-none"
          rows="3"
          placeholder="Write your love note here..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button
          onClick={addNote}
          className="mt-4 px-6 py-2 bg-[#74452c] text-[#cff8ff] rounded-full shadow-md hover:bg-[#e8fcff] hover:font-bold hover:text-[#74452c] transition duration-200"
        >
          Add Note
        </button>
      </div>

      {/* Display Notes */}
      <div className="notes-list space-y-4">
        {notes.length > 0 ? (
          notes.map((note) => (
            <div key={note.id} className="note-item p-4 bg-white rounded-lg shadow-md">
              <p className="text-lg font-mono font-light text-gray-700">{note.text}</p>
              <button
                onClick={() => deleteNote(note.id)}
                className="mt-2 text-sm font-mono text-[#74452c] hover:text-[#462818]"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 font-mono">No love notes yet. Start adding some!</p>
        )}
      </div>
    </div>
  );
};

export default LoveNotes;
