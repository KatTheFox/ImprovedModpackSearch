interface ProjectResult {
  slug: string;
  title: string;
  description: string;
  categories?: string[];
  client_side: "required" | "optional" | "unsupported";
  server_side: "required" | "optional" | "unsupported";
  project_type: "mod" | "modpack" | "resourcepack" | "shader";
  downloads: number;
  icon_url?: string;
  color?: number;
  thread_id?: string;
  monetization_status?: "monetized" | "demonetized" | "force-demonetized";
  project_id: string;
  author: string;
  display_categories?: string[];
  versions: string[];
  follows: number;
  date_created: string;
  date_modified: string;
  latest_version?: string;
  license: string;
  gallery?: string[];
  featured_gallery?: string;
}
interface ProjectSearchResponse {
  hits: ProjectResult[];
  offset: number;
  limit: number;
  total_hits: number;
}
interface ProjectGetResponse {
  slug: string;
  title: string;
  description: string;
  categories: string[];
  client_side: "required" | "optional" | "unsupported";
  server_side: "required" | "optional" | "unsupported";
  body: string;
  status:
    | "approved"
    | "archived"
    | "rejected"
    | "draft"
    | "unlisted"
    | "processing"
    | "withheld"
    | "scheduled"
    | "private"
    | "unknown";
  requested_status: "approved" | "archived" | "unlisted" | "private" | "draft";
  additional_categories?: string[];
  issues_url?: string;
  source_url?: string;
  wiki_url?: string;
  discord_url?: string;
  donation_urls?: Array<{ id: string; platform: string; url: string }>;
  project_type: "mod" | "modpack" | "resourcepack" | "shader";
  downloads: number;
  icon_url?: string;
  color?: number;
  thread_id?: string;
  monetization_status?: "monetized" | "demonetized" | "force-demonetized";
  id: string;
  team: string;
  published: string;
  updated: string;
  approved?: string;
  queued?: string;
  followers: number;
  license: { id: string; name: string; url?: string };
  versions?: string[];
  game_versions?: string[];
  loaders?: string[];
  gallery?: Array<{
    url: string;
    featured: boolean;
    title?: string;
    description?: string;
    created: string;
    ordering?: number;
  }>;
}
