import type {Context} from "elysia";
import {ResponseApiJson, ReturnCatchError} from "../../Helper/ResponseApiJson";
import {CallApi} from "../../Helper/CallApi";
import {TurnstileValidation} from "../../Helper/TurnstileValidation";


interface IBodyMessage {
    phone: number,
    message: string,
    name: string,
    email: string,
    token: string,
}

interface ISendMessage {
    set: Context['set'],
    headers: Context['headers'],
    body: IBodyMessage,
}

export const SendMessageToTelegram = async ({set, headers, body}: ISendMessage) => {
    try {
        const {name, email, phone, message, token} = body;
        const telegramBotToken = Bun.env.BOT_TELEGRAM_TOKEN ?? ''
        const chatId = Bun.env.TELEGRAM_ID ?? ''
        // gausah validasi kalau gapake cloudflare
        const validRequest = await TurnstileValidation(token, headers)
        if (!validRequest) {
            return ResponseApiJson({
                set,
                msg: 'Request Not Valid',
                code: 'INVALID_REQUEST',
                status: false,
                statusCode: 400,
            })
        }
        const messageFix = `Message from website diomaulana

From: ${name}
Email: ${email}
Phone: ${phone}
Pesan: ${message}`;

        const apiLink = `https://api.telegram.org/bot${telegramBotToken}/sendmessage`;
        const teks = encodeURIComponent(messageFix);

        const url = `${apiLink}?chat_id=${chatId}&text=${teks}&parse_mode=HTML&disable_web_page_preview=true`;
        const response = await CallApi({url: url, method: 'GET'})
        if (!response.status) {
            return ResponseApiJson({
                set,
                msg: 'Cant send message',
                code: 'CANT_SEND_MESSAGE',
                status: false,
                statusCode: 400,
            })
        }
        return ResponseApiJson({
            set,
            msg: 'Message sent successful',
            code: 'OK',
            status: true,
            statusCode: 200,
        })
    } catch (e) {
        return ReturnCatchError(e, set)
    }

}