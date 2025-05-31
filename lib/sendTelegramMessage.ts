import {toast} from "sonner";

type MessageType = "Contact Us" | "Booking" | "Support";

interface SendTelegramMessageOptions {
    type: MessageType;
    fields: Record<string, string | boolean>;
}

export const sendTelegramMessage = async ({type, fields,}: SendTelegramMessageOptions): Promise<boolean> => {
    const BASE_URL = "https://api.telegram.org";

    const formattedFields = Object.entries(fields)
        .map(([key, value]) => {
            const label = key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase());
            return `🔹 ${label}: ${typeof value === "boolean" ? (value ? "Yes" : "No") : value}`;
        })
        .join("\n");

    const messageText = `📩 ${type} Request\n\n${formattedFields}`;

    try {
        const response = await fetch(
            `${BASE_URL}/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_BOT,
                    text: messageText,
                }),
            }
        );

        const res = await response.json();

        if (res.ok) {
            toast.success("✅ Your message has been sent successfully!");
            return true;
        } else {
            toast.error("❌ Failed to send the message. Please try again.");
            return false;
        }
    } catch (error) {
        console.error("Telegram error:", error);
        toast.error("⚠️ Something went wrong. Try again later !");
        return false;
    }
};
