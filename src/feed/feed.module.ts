import { Module } from "@nestjs/common";
import { FeedController } from "./feed.controller";
import { WikipediaProvider } from "src/axios-provider/wikipedia/wikipedia.provider";
import { FeedService } from './feed.service';

@Module({
    controllers: [FeedController],
    providers: [WikipediaProvider, FeedService],
})
export class FeedModule {}
