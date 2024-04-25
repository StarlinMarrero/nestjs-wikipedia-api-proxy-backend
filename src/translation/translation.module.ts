import { Module } from "@nestjs/common";
import { TranslationController } from "./translation.controller";
import { TranslationService } from "./translation.service";
import { TranslationProvider } from "src/axios-provider/translation/translation.provider";

@Module({
    controllers: [TranslationController],
    providers: [TranslationService, TranslationProvider],
})
export class TranslationModule {}
