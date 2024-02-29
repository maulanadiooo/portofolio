<script lang="ts">
    import {t} from "$lib/Translate/i18n.js";
    import CloseIcon from "$lib/images/CloseIcon.svelte";
    import {CallApi} from "$lib/Helper/CallApi";
    import {PUBLIC_TURNSTILE_CF_SITE_KEY} from "$env/static/public";
    import {onMount} from "svelte";

    const cfSiteKey = PUBLIC_TURNSTILE_CF_SITE_KEY;

    let responseMessage = '';
    let isSuccessSent = false;
    let name: string = '';
    let email: string = '';
    let phone: number;
    let message: string = '';
    let isLoading: boolean = false;
    const onSubmitMessage = async () => {
        if (isLoading) {
            return;
        }
        if (name.length <= 0 || email.length <= 0 || message.length <= 0 || String(phone).length <= 0) {
            responseMessage = 'All Field Required';
            return;
        }
        isLoading = true;
        try {
            turnstile.ready(function () {
                turnstile.render('#cf-turnstile-ctr', {
                    sitekey: `${cfSiteKey}`,
                    callback: async function (token: string) {
                        const url = `/api/contact`
                        const data = {
                            email,
                            name,
                            phone,
                            message,
                            token,
                        }
                        const response = await CallApi({url, method: 'POST', data})
                        if (response.status) {
                            isSuccessSent = true;
                        } else {
                            isSuccessSent = false;
                        }
                        responseMessage = response.msg
                        isLoading = false;
                    },
                });
            });
        } catch (e) {
            responseMessage = 'Something bad happened, please refresh page';
            isLoading = false;
        }


    }
    const closeMessage = () => {
        responseMessage = '';
    }

</script>

<svelte:head>
    <script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"></script>
</svelte:head>

<section id="contact" class="pt-28 pb-16 dark:bg-dark">
    <div class="container">
        <div class="w-full px-4 mb-16">
            <div class="text-center">
                <h4 class="text-primary font-bold uppercase text-xl mb-2 lg:text-2xl">{$t("contact.title")}</h4>
                <h2 class="font-bold text-dark lg:text-xl dark:text-white">{$t("contact.desc")}</h2>
                <p class="text-secondary font-medium text-sm lg:text-base dark:text-secondary-dark">
                    {$t("contact.desc2")}
                </p>
            </div>
        </div>


        <div class="w-full lg:w-2/3 mx-auto">
            {#if responseMessage !== ''}
                <div class="flex px-4 mx-4 mb-3 {isSuccessSent ? 'bg-green-600' : 'bg-red-400 '} opacity-80 py-2 rounded-md relative">
                    <span class="text-white text-sm font-semibold">{responseMessage}</span>
                    <button class="absolute -top-3 -right-3 p-1 text-dark dark:text-white"
                            on:click={closeMessage}>
                        <CloseIcon widthSvg={25}/>
                    </button>
                </div>
            {/if}

            <div class="w-full px-4 mb-4">
                <div>
                    <label for="first_name"
                           class="block mb-2 text-sm font-medium text-dark dark:text-white"> {$t("contact.name")}</label>
                    <input type="text" id="first_name"
                           class="focus:outline-none bg-slate-200 border border-gray-300 text-dark text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-3"
                           placeholder={$t("contact.name")} required bind:value={name}/>
                </div>
            </div>
            <div class="w-full px-4 mb-4">
                <div>
                    <label for="email"
                           class="block mb-2 text-sm font-medium text-dark dark:text-white"> {$t("contact.email")}</label>
                    <input type="email" id="email"
                           class="focus:outline-none bg-slate-200 border border-gray-300 text-dark text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-3"
                           placeholder="jhondoe@mail.com" bind:value={email} required/>
                </div>
            </div>
            <div class="w-full px-4 mb-4">
                <div>
                    <label for="phone_number"
                           class="block mb-2 text-sm font-medium text-dark dark:text-white"> {$t("contact.phone")}</label>
                    <input type="number" id="phone_number"
                           class="focus:outline-none bg-slate-200 border border-gray-300 text-dark text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-3"
                           placeholder="628xxxxxxx" bind:value={phone} required/>
                </div>
            </div>
            <div class="w-full px-4 mb-4">
                <div>
                    <label for="message"
                           class="block mb-2 text-sm font-medium text-dark dark:text-white"> {$t("contact.message")}</label>
                    <textarea id="message"
                              class="focus:outline-none bg-slate-200 border border-gray-300 text-dark text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-3 h-40"
                              placeholder={$t("contact.message")} bind:value={message} required/>
                </div>
            </div>
            <div class="w-full px-4 mb-4">
                <div class="cf-turnstile" id="cf-turnstile-ctr" data-sitekey={cfSiteKey}></div>
            </div>

            <div class="w-full px-4 mb-4">
                <button type="submit"
                        class="bg-primary w-full p-2 rounded-xl text-white text-sm hover:opacity-80 transition duration-500 ease-in-out"
                        on:click={onSubmitMessage} disabled={isLoading}>
                    {#if !isLoading}
                        {$t("contact.sendMessage")}
                    {:else }
                        <div class="flex items-center justify-center">
                            <div role="status">
                                <svg aria-hidden="true"
                                     class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                                     viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                          fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                          fill="currentFill"/>
                                </svg>
                            </div>
                        </div>
                    {/if}
                </button>
            </div>
        </div>

    </div>
</section>