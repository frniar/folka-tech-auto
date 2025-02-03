import { until } from "selenium-webdriver";
import loginPage from "../pages/login.js";

class LoginController {
    constructor(driver) {
        this.driver = driver;
    }

    async open(url) {
        await this.driver.get(url);
    }

    async login(email, password) {
        const { emailInput, passwordInput, loginButton } = loginPage;
        await this.driver.wait(until.elementLocated(loginPage.emailInput), 5000);
        await this.driver.findElement(loginPage.emailInput).sendKeys(email);
        await this.driver.findElement(loginPage.passwordInput).sendKeys(password);
        await this.driver.findElement(loginPage.loginButton).click();

        await this.driver.wait(until.elementLocated(emailInput), 5000);
        
        const emailElement = await this.driver.findElement(emailInput);
        const passwordElement = await this.driver.findElement(passwordInput);
        
        await emailElement.sendKeys(email);
        await passwordElement.sendKeys(password);
        
        await this.driver.findElement(loginButton).click();
        
        await emailElement.clear();
        await passwordElement.clear();
        await this.driver.findElement(loginPage.emailInput).clear();
        await this.driver.findElement(loginPage.passwordInput).clear();
    }

    async getErrorMessage() {
        await this.driver.wait(until.elementLocated(loginPage.errorMessage), 5000);
        return await this.driver.findElement(loginPage.errorMessage).getText();
    }
}

export default LoginController;