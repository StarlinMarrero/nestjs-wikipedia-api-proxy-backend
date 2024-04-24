import { IsDate, IsOptional, IsString, Max, MaxLength, Min } from "class-validator";

export class GetFeedDto {
    @IsOptional()
    @IsString()
    @MaxLength(2)
    lang: string = "en";

    @IsOptional()
    @IsString()
    date: string = new Date().toISOString();
}
