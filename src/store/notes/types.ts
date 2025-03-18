import type { Note } from '../../types/notes';

export interface NotesState {
  notes: Note[];
  selectedNoteId: string | null;
  selectedNote: Note | null;
  loading: boolean;
  error: string | null;
  createNote: () => Promise<string | undefined>;
  loadNotes: () => Promise<(() => void) | undefined>;
  selectNote: (id: string) => void;
  updateNote: (id: string, updates: Partial<Note>) => Promise<void>;
  deleteNote: (id: string) => Promise<void>;
  saveNote: (id: string) => Promise<void>;
  cleanup: () => void;
}