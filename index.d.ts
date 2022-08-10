declare type ScrapeitCloudAPIParams = {
  keyword: string,
  page: number,
  country: string,
  domain: string,
}

declare type Pagination = {
  currentPage: number,
  nextPage: number|null
}

declare type ScrapeitCloudAPIResponse = {
  pagination: Pagination,
  locals: Array<any>,
}

declare class ScrapeitCloud {
  private readonly apiKey: string;
  constructor(apiKey: string);

  scrape(params: ScrapeitCloudAPIParams): Promise<ScrapeitCloudAPIResponse>;
}

export default ScrapeitCloud;
