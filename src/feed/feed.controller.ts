import { Controller, Get, HttpException, HttpStatus, Param, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { FeedService } from "./feed.service";
import { pipe } from "rxjs";
import { GetFeedDto } from "./dto/getFeed.dto";

@Controller("/feed")
export class FeedController {
    constructor(private readonly feedService: FeedService) {}
    @Get()
    @UsePipes(new ValidationPipe())
    async getSummary(@Query() query: GetFeedDto) {
        const { data, error } = await this.feedService.getFeeds(query.lang, query.date);
        if (error) {
            return new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return data;
    }
}
