import { loginSchema } from "../../../src/features";

describe("loginSchema", () => {
  it("accepts valid credentials", () => {
    const result = loginSchema.safeParse({
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    });

    expect(result.success).toBe(true);
  });

  it("rejects invalid email", () => {
    const result = loginSchema.safeParse({
      email: "wrong-email",
      password: "cityslicka",
    });

    expect(result.success).toBe(false);
  });

  it("rejects empty password", () => {
    const result = loginSchema.safeParse({
      email: "eve.holt@reqres.in",
      password: "",
    });

    expect(result.success).toBe(false);
  });

  it("rejects empty form", () => {
    const result = loginSchema.safeParse({
      email: "",
      password: "",
    });

    expect(result.success).toBe(false);
  });
});
