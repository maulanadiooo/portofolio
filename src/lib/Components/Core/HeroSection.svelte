<script lang="ts">
    import photoProfile from '$lib/images/diomaulana.png';

    import {t} from '$lib/Translate/i18n';

    const scrollIntoView = ({target}: { target: HTMLElement }) => {
        const el = document.querySelector(target.getAttribute('href')!);
        if (!el) return;
        el.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    };
</script>

<section id="home" class="pt-36 dark:bg-dark">
    <div class="container">
        <div class="flex flex-wrap">
            <div class="w-full self-center px-4 lg:w-1/2">
                <h1 class="font-bold text-base text-primary md:text-xl">
                    {$t("hero.greeting")}
                    <span class="block text-dark text-4xl mt-1 lg:text-5xl dark:text-white">
                        Dio Maulana
                    </span>
                </h1>
                <h2 class="font-medium text-secondary mb-5 lg:text-xl dark:text-secondary-dark">
                    Web & Mobile <span class="text-dark font-semibold dark:text-white">Developer</span>
                </h2>
                <p class="font-medium text-secondary mb-10 dark:text-secondary-dark">{$t("hero.quote")}
                </p>
                <a href="#contact"
                   class="bg-primary p-3 rounded-xl font-medium text-white hover:opacity-80 transition duration-500 ease-in-out" on:click|preventDefault={scrollIntoView}>{$t("hero.contactMe")}</a>
            </div>
            <div class="w-full self-end px-4 lg:w-1/2">
                <div class="mt-10 relative lg:mt-0 right-0">
                    <img src={photoProfile} alt="Dio Maulana" class="relative z-10 mx-auto" width={300}/>
                    <span class="absolute bottom-16 left-1/2 -translate-x-1/2 md:scale-125 lg:bottom-0">
                        <svg width="350" height="350" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#06b6d4"
        d="M26.1,-22.3C42.5,-9.7,70.4,-4.9,78.3,7.9C86.2,20.6,73.9,41.1,57.5,46.7C41.1,52.2,20.6,42.7,0.3,42.4C-20,42.1,-40.1,51.1,-46.8,45.6C-53.6,40.1,-47.1,20,-42.9,4.2C-38.7,-11.6,-36.7,-23.2,-29.9,-35.7C-23.2,-48.3,-11.6,-61.8,-3.4,-58.5C4.9,-55.1,9.7,-34.8,26.1,-22.3Z"
        transform="translate(100 100) scale(1.2)"/>
</svg>
                    </span>
                </div>
            </div>
        </div>
    </div>
</section>