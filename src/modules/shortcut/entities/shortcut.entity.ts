export interface ShortcutEntity {
  id: number;
  code: string;
  baseLink: string;
  userId?: string;

  createdAt: Date;
}
