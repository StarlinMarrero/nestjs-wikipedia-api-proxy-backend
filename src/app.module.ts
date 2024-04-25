import { Module } from "@nestjs/common";
import { AxiosProvidersModule } from "./axios-provider/axios-provider.module";
import { FeedModule } from "./feed/feed.module";
import { TranslationModule } from "./translation/translation.module";
import { ConfigModule } from "@nestjs/config";
import configuration from "./config/configuration";

@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true, load: [configuration] }), FeedModule, AxiosProvidersModule, TranslationModule],
})
export class AppModule {}
