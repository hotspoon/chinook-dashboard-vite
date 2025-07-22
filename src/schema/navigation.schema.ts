interface NavItem {
  title: string;
  url: string;
  isActive?: boolean; // optional
}

interface NavSection {
  title: string;
  url: string;
  items: NavItem[];
}

export interface AppData {
  versions: string[];
  navMain: NavSection[];
}
