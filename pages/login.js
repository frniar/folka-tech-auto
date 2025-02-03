import { By } from "selenium-webdriver";

class LoginPage {
    get emailInput() {
        return By.name("email"); // Sesuaikan dengan locator di website
    }

    get passwordInput() {
        return By.id("password");
    }

    get loginButton() {
        return By.xpath("//*[@type = 'submit']");
    }

    get errorMessage() {
        return By.xpath("//*[@role = 'alert']");
    }
}

export default new LoginPage();
