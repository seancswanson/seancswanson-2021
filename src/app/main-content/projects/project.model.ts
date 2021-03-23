export class Project {
  public title: string;
  public screenshotPath: string;
  public description: string;
  public tech: string[];
  public liveUrl: string;
  public githubUrl: string;

  constructor(
    title: string,
    screenshotPath: string,
    description: string,
    tech: string[],
    liveUrl: string,
    githubUrl: string
  ) {
    this.title = title;
    this.screenshotPath = screenshotPath;
    this.description = description;
    this.tech = tech;
    this.liveUrl = liveUrl;
    this.githubUrl = githubUrl;
  }
}
