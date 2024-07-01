import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ObjectType("TestResultDtoObject")
class TestResultDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    url!: string;

    @Field(() => GraphQLJSON)
    result!: InputJsonValue;

    @Field(() => Date)
    @Type(() => Date)
    runAt!: Date;
}

export { TestResultDto as TestResultDto };