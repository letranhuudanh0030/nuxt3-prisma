import { IExample } from "@/types/IExample";

export async function validate(data: IExample) {
  const errors = new Map<string, { message: string | undefined }>();

  for (const [key, value] of Object.entries(data)) {
    if (value === "") {
      errors.set(key, { message: "This field is required" });
    }
  }

  return errors;
}
