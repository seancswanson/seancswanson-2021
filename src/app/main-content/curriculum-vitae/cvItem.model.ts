export class CvItem {
  public organization: string;
  public role: string;
  public dateRange: string;
  public description: string;
  public techDescription: string;
  public toolsDescription: string;
  public tech: string[];
  public tools: string[];

  constructor(
    organization: string,
    role: string,
    dateRange: string,
    description: string,
    techDescription: string,
    toolsDescription: string,
    tech: string[],
    tools: string[]
  ) {
    this.organization = organization;
    this.role = role;
    this.dateRange = dateRange;
    this.description = description;
    this.techDescription = techDescription || '';
    this.toolsDescription = toolsDescription || '';
    this.tech = tech;
    this.tools = tools || [''];
  }
}
