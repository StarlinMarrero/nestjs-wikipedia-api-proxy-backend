import { Injectable } from "@nestjs/common";
import { WikipediaProvider } from "src/axios-provider/wikipedia/wikipedia.provider";

@Injectable()
export class FeedService {
    constructor(private readonly wikipediaAxiosProvider: WikipediaProvider) {}

    async getFeeds(lang: string, date: string = new Date().toISOString()) {
        return await this.wikipediaAxiosProvider.getFeeds(lang, date);
    }
}
