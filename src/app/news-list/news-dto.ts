import {ArticleDTO} from './article-dto';

export class NewsDto {
  country: string;
  category: string;
  articles: Array<ArticleDTO> = [];
  totalResults: number;
}
