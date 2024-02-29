<script>
    import {t} from "$lib/Translate/i18n.js";
</script>

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
            <div class="w-full px-4 mb-4">
                <div>
                    <label for="first_name" class="block mb-2 text-sm font-medium text-dark dark:text-white"> {$t("contact.name")}</label>
                    <input type="text" id="first_name"
                           class="focus:outline-none bg-slate-200 border border-gray-300 text-dark text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-3"
                           placeholder= {$t("contact.name")} required/>
                </div>
            </div>
            <div class="w-full px-4 mb-4">
                <div>
                    <label for="first_name" class="block mb-2 text-sm font-medium text-dark dark:text-white"> {$t("contact.email")}</label>
                    <input type="email" id="first_name"
                           class="focus:outline-none bg-slate-200 border border-gray-300 text-dark text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-3"
                           placeholder="jhondoe@mail.com" required/>
                </div>
            </div>
            <div class="w-full px-4 mb-4">
                <div>
                    <label for="first_name" class="block mb-2 text-sm font-medium text-dark dark:text-white"> {$t("contact.message")}</label>
                    <textarea id="first_name"
                              class="focus:outline-none bg-slate-200 border border-gray-300 text-dark text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-3 h-40"
                              placeholder= {$t("contact.message")} required/>
                </div>
            </div>
            <div class="w-full px-4 mb-4">
                <button type="submit"
                        class="bg-primary w-full p-2 rounded-xl text-white text-sm hover:opacity-80 transition duration-500 ease-in-out">
                    {$t("contact.sendMessage")}
                </button>
            </div>
        </div>

    </div>
</section>