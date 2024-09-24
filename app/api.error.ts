import { components } from "@/src/app/api.schema";

export type ApiErrorCode = components["schemas"]["ErrorCode"];

export const EMAIL_NOT_VERIFIED: ApiErrorCode = "1001";
