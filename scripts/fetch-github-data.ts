import fs from "fs";
import path from "path";

// In a real application, you would use octokit or fetch from the GitHub API here
// and use process.env.GITHUB_TOKEN. To avoid rate limits in MVP, we mock this.

interface GitHubData {
  followers: number;
  publicRepos: number;
  topLanguages: string[];
}

async function fetchGitHubData() {
  console.log("Fetching GitHub data...");
  
  // Mock data for the MVP
  const data: GitHubData = {
    followers: 120,
    publicRepos: 45,
    topLanguages: ["TypeScript", "Rust", "Go"],
  };

  const dirPath = path.join(process.cwd(), "src", "data", "github");
  
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const filePath = path.join(dirPath, "profile.json");
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log("GitHub data saved to src/data/github/profile.json");
}

fetchGitHubData().catch(console.error);
