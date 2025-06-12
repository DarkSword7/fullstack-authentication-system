import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";
dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
  host: "send.api.mailtrap.io",
});

export const sender = {
  email: "hello@androvision.me",
  name: "Ashutosh",
};
