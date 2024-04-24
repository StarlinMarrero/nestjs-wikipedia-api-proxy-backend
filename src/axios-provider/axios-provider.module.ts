import { Module } from "@nestjs/common";
import { WikipediaAxiosProvider } from "./axios-wikipedia";

@Module({
    imports: [],
    providers: [WikipediaAxiosProvider],
})
export class AxiosProvidersModule {}
