import { Body, Controller, HttpException, HttpStatus, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { TranslationService } from "./translation.service";
import { ITranslationRequest } from "src/axios-provider/translation/interfaces";
import { TranslationDto } from "./dto/translation.dto";

@Controller("/translation")
export class TranslationController {
    constructor(private readonly translationService: TranslationService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    async translation(@Body() data: TranslationDto) {
        const { data: translationData, error } = await this.translationService.getTranslation(data);
        if (error) {
            return new HttpException(error, error.response.status || HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return translationData;
    }
}
