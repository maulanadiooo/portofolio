<script lang="ts">
    import LogoWebsite from "$lib/images/LogoWebsite.svelte";
    import {onMount} from "svelte";
    import {locale} from '$lib/Translate/i18n';
    import UsaIcon from "$lib/images/UsaIcon.svelte";
    import IdIcon from "$lib/images/IdIcon.svelte";
    import LigtModeIcon from "$lib/images/LigtModeIcon.svelte";
    import DarkModeIcon from "$lib/images/DarkModeIcon.svelte";

    let isOpenMenuMobile = false;
    let isOnScroll = false;

    let isCheckedLang: boolean = true;

    let isDark = true;

    const hamburgerClicked = () => {
        isOpenMenuMobile = !isOpenMenuMobile;
    }

    const handleScroll = () => {
        isOnScroll = scrollVertical > 5;
    }

    const scrollIntoView = ({target}: { target: HTMLElement }) => {
        const el = document.querySelector(target.getAttribute('href')!);
        if (!el) return;
        el.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    };

    const changeDarkMode = () => {
        isDark = !isDark;
        let html = document.querySelector('html');
        if (isDark) {
            html?.classList.add('dark')
        } else {
            html?.classList.remove('dark')
        }
    }

    let scrollVertical: any;
    $: if (scrollVertical) {
        handleScroll();
    }

    $: isCheckedLang ? $locale = 'en' : $locale = 'id'

</script>

<header class="bg-transparent absolute top-0 left-0 w-full flex items-center z-10 {isOnScroll ? 'navbar-fixed' : ''}">
    <div class="container">
        <div class="flex items-center justify-between relative">
            <div class="px-4">
                <a href="#" class="text-primary py-6 block">
                    <LogoWebsite/>
                </a>
            </div>
            <div class="flex items-center px-4">
                <button type="button"
                        class="block absolute right-4 {isOpenMenuMobile ? 'hamburger-active' : ''} lg:hidden"
                        on:click={hamburgerClicked}>
                    <span class="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                    <span class="hamburger-line transition duration-300 ease-in-out"></span>
                    <span class="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                </button>
                <nav class="{isOpenMenuMobile ? '' : 'hidden'} dark:bg-dark dark:shadow-slate-500 absolute py-5 bg-white shadow-lg shadow-sky-100 rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:dark:bg-transparent lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                    <ul class="block lg:flex lg:items-center">
                        <li class="group">
                            <a href="#home" class="menu-list"
                               on:click|preventDefault={scrollIntoView}>Home</a>
                        </li>
                        <li class="group">
                            <a href="#about" class="menu-list"
                               on:click|preventDefault={scrollIntoView}>About
                                Me</a>
                        </li>
                        <li class="group">
                            <a href="#portfolio" class="menu-list"
                               on:click|preventDefault={scrollIntoView}>Portfolio</a>
                        </li>
                        <li class="group">
                            <a href="#contact" class="menu-list"
                               on:click|preventDefault={scrollIntoView}>Contact</a>
                        </li>
                        <li>
                            <label class="inline-flex items-center cursor-pointer mx-5 lg:mx-0 mt-4 lg:mt-0">
                                <span class="ms-3 font-semibold text-red-600 mr-2 rounded-full overflow-hidden"><IdIcon/></span>
                                <input type="checkbox" class="sr-only peer" bind:checked={isCheckedLang}>
                                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-transparent rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                                <span class="ms-3 font-semibold text-red-600 ml-2 rounded-xl overflow-hidden"><UsaIcon/></span>
                            </label>
                        </li>
                        <li>
                            <button class="rounded-full p-2 mx-8 mt-3 bg-white border border-slate-300 lg:mt-0" on:click={changeDarkMode}>
                                {#if !isDark}
                                    <DarkModeIcon widthSvg={15}/>
                                {:else}
                                    <LigtModeIcon widthSvg={15}/>
                                {/if}
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</header>

<svelte:window bind:scrollY={scrollVertical}/>