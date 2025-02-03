import { Builder } from "selenium-webdriver";
import LoginController from "../controller/login.controller.js";
import { expect } from "chai";
import { describe, it, before, after } from "mocha";

describe("Login Tests", function () {
    this.timeout(10000);

    let driver;
    let loginController;

    before(async function () {
        driver = new Builder().forBrowser("chrome").build();
        loginController = new LoginController(driver);
    });

    after(async function () {
        await driver.quit();
    });

    describe("Invalid Login", function () {
        it("should show error message with invalid credentials", async function () {
            await loginController.open("https://lapor.folkatech.com/admin/dashboard");
            await loginController.login("invalid@example.com", "wrongpassword");

            await driver.sleep(3000);
            const errorMessage = await loginController.getErrorMessage();
            expect(errorMessage).to.equal("Login Gagal! Akun tidak ada.");
            console.log("Test Case 1: Gagal Login");
        });
    });

    describe("Valid Login", function () {
        it("should login successfully with valid credentials", async function () {
            await loginController.open("https://lapor.folkatech.com/admin/dashboard");
            await loginController.login("admin@example.com", "password");

            const currentUrl = await driver.getCurrentUrl();
            expect(currentUrl).to.include("dashboard");
            console.log("Test Case 2: Berhasil Login");
        });
    });
});
