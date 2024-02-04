import { get } from "axios";

async function searchTest() {
  const response = await get("https://api.modrinth.com/v2/search", {
    params: {
      facets:
        '[["categories!=optimization"],["categories:fabric"],["versions:1.19.2"],["project_type:modpack"]]',
    },
  });
  const results = response.data as ProjectSearchResponse;
  console.log(results.hits);
}

void searchTest();
