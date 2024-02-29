<script>
import YoutubeIcon from "$lib/images/YoutubeIcon.svelte";
import InstagramIcon from "$lib/images/InstagramIcon.svelte";
import LinkedinIcon from "$lib/images/LinkedinIcon.svelte";
import SvelteIcon from "$lib/images/SvelteIcon.svelte";
import TailwindCssIcon from "$lib/images/TailwindCssIcon.svelte";
import ElysiaImage from "$lib/images/elysia.png";
import {t} from '$lib/Translate/i18n';
import GithubIcon from "$lib/images/GithubIcon.svelte";
</script>

<section id="footer" class="bg-dark">
    <div class="container">
        <div class="w-full p-4 flex justify-between items-center lg:w-2/3 lg:mx-auto">
            <p class="text-white text-base font-medium"> <span class="text-primary">&copy;</span> Dio Maulana</p>
            <div class="flex items-center">
                <!--youtube-->
                <a href="https://github.com/maulanadiooo" target="_blank"
                   class="socmed-icon">
                    <GithubIcon widthSvg={10}/>
                </a>
                <!--Instagram -->
                <a href="https://instagram.com/maulanadioo" target="_blank"
                   class="socmed-icon">
                    <InstagramIcon widthSvg={10}/>
                </a>
                <!--LinkedIn -->
                <a href="https://www.linkedin.com/in/dio-maulana-28771b1b7/" target="_blank"
                   class="socmed-icon">
                    <LinkedinIcon widthSvg={10}/>
                </a>
            </div>
        </div>
        <div class="flex justify-center items-center pb-4">
            <p class="text-white font-semibold mr-4">{$t('footer.websiteMade')}</p>
            <a href="https://svelte.dev" target="_blank" class="text-orange-700 bg-transparent border border-white rounded-full p-1 mr-2">
                <SvelteIcon  widthSvg={10}/>
            </a>
            <a href="https://tailwindcss.com" target="_blank" class="text-blue-500 bg-transparent border border-white rounded-full p-1 mr-2">
                <TailwindCssIcon  widthSvg={10}/>
            </a>
            <a href="https://elysiajs.com" target="_blank" class="text-blue-500 bg-transparent border border-white rounded-full p-1 mr-2">
                <img src={ElysiaImage} alt="Elysia JS"  width={10}/>
            </a>
        </div>
    </div>
</section>