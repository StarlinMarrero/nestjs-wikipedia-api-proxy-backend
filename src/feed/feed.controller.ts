import { Controller, Get, HttpException, HttpStatus, Param, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { FeedTranslateDto } from "./dto/feedTranslate.dto";
import { GetFeedDto } from "./dto/getFeed.dto";
import { FeedService } from "./feed.service";
import { LogService } from "src/log/log.service";

@Controller("/feed")
export class FeedController {
    constructor(
        private readonly feedService: FeedService,
        private readonly logService: LogService,
    ) {}
    @Get()
    @UsePipes(new ValidationPipe())
    async getSummary(@Query() query: GetFeedDto) {
        const { data, error } = await this.feedService.getFeeds(query.lang, query.date);

        this.logService.create("info", "Get feed summary");

        if (error) {
            this.logService.create("error", "Failed to get feed summary");
            return new HttpException(error.response, error.response.status || HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return data;
    }
    @Get("/translate/:language/featured/:year/:month/:day")
    @UsePipes(new ValidationPipe())
    async translate(@Param() param: FeedTranslateDto) {
        const { language, year, month, day } = param;
        const { data, error } = await this.feedService.getFeeds(language, `${year}-${month}-${day}`);

        if (error) {
            this.logService.create("error", "Failed to translate feed");
            return new HttpException(error.response, error.response.status || HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return data;
    }
}
