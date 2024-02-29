<script>
    import InstagramIcon from "$lib/images/InstagramIcon.svelte";
    import YoutubeIcon from "$lib/images/YoutubeIcon.svelte";
    import LinkedinIcon from "$lib/images/LinkedinIcon.svelte";
    import {t} from '$lib/Translate/i18n';
</script>

<section id="about" class="pt-28 dark:bg-dark">
    <div class="container">
        <div class="flex flex-wrap">
            <div class="w-full px-4 mb-10 lg:w-1/2 ">
                <h4 class="font-bold uppercase text-xl mb-3 text-primary lg:text-2xl">{$t("about.title")}</h4>
                <h3 class="text-dark font-bold text-3xl mb-3 lg:text-4xl dark:text-white">{$t("about.title2")}</h3>
                <p class="font-medium text-base text-secondary max-w-xl lg:text-xl dark:text-secondary-dark">
                    {$t("about.desc")}
                </p>
            </div>
            <div class="w-full px-4 lg:w-1/2">
                <h3 class="text-dark font-bold text-xl mb-3 lg:text-2xl lg:pt-12 dark:text-white">{$t("about.title3")}</h3>
                <p class="font-medium text-base text-secondary mb-6 lg:text-xl dark:text-secondary-dark">
                    {$t("about.desc2")}
                </p>
                <div class="flex items-center mb-6">
                    <!--youtube-->
                    <a href="https://youtube.com" target="_blank"
                       class="socmed-icon">
                        <YoutubeIcon/>
                    </a>
                    <!--Instagram -->
                    <a href="https://instagram.com/maulanadioo" target="_blank"
                       class="socmed-icon">
                        <InstagramIcon/>
                    </a>
                    <!--LinkedIn -->
                    <a href="https://www.linkedin.com/in/dio-maulana-28771b1b7/" target="_blank"
                       class="socmed-icon">
                        <LinkedinIcon/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>