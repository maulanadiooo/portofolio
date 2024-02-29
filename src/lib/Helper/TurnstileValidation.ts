import {CheckIp} from "./CheckIP";
import type {Context} from "elysia";

export const TurnstileValidation = async (token: string, headers: Context['headers']): Promise<boolean> => {
    const SECRET_KEY = Bun.env.TURNSTILE_CF_SECRET_KEY ?? '';
    let clientIP = CheckIp({headers, headerToCheck: "cf-connecting-ip"})
    if (clientIP === 'UNKNOWN_IP') {
        // Msukkan IP Local kalau belum di publish
        clientIP = '103.111.140.201'
    }
    // validasi captcha dulu

    let formData = new FormData();
    formData.append('secret', SECRET_KEY!);
    formData.append('response', token);
    formData.append('remoteip', String(clientIP));

    const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const firstResult = await fetch(url, {
        body: formData,
        method: 'POST',
    });
    const firstOutcome = await firstResult.json();
    return firstOutcome.success;
}