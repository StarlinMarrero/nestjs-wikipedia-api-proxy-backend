import { Injectable } from "@nestjs/common";
import { WikipediaAxiosProvider } from "src/axios-provider/axios-wikipedia";

@Injectable()
export class FeedService {
    constructor(private readonly wikipediaAxiosProvider: WikipediaAxiosProvider) {}

    async getFeeds(lang: string, date: string = new Date().toISOString()) {
        return await this.wikipediaAxiosProvider.getFeeds(lang, date);
    }
}
