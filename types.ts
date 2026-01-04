
export interface ProjectMeta {
  title: string;
  period: string;
  role: string;
  stack: string[];
  summary: string;
  image?: string; // Optional image path for project cards
  links?: {
    github?: string;
    demo?: string;
    backend?: string;
    frontend?: string;
  };
  slug: string;
}

export interface NoteMeta {
  title: string;
  date: string;
  tags: string[];
  summary: string;
  slug: string;
}

export interface ProjectData {
  meta: ProjectMeta;
  content: string;
}

export interface NoteData {
  meta: NoteMeta;
  content: string;
}
