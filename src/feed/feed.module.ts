import { Module } from "@nestjs/common";
import { FeedController } from "./feed.controller";
import { WikipediaAxiosProvider } from "src/axios-provider/axios-wikipedia";
import { FeedService } from './feed.service';

@Module({
    controllers: [FeedController],
    providers: [WikipediaAxiosProvider, FeedService],
})
export class FeedModule {}
