import { Module } from "@nestjs/common";
import { AxiosProvidersModule } from "./axios-provider/axios-provider.module";
import { FeedModule } from "./feed/feed.module";

@Module({
    imports: [FeedModule, AxiosProvidersModule],
})
export class AppModule {}
